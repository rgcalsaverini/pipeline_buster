function valueOf(val, regs){
  return isNaN(Number(val)) ? regs[val] : Number(val);
}

function setEflags(registers, reg){
  registers.Z = registers[reg] == 0;
  registers.SF = registers[reg] < 0;
  return registers;
}

function clearEflags(registers){
  registers.Z = null;
  registers.SF = null;
}

module.exports = function(operation, instruction, registers, stack) {
  // if(pc >= code.length){
  //   return {
  //     success: false,
  //     error: 'Linha ' + pc2 + ' Lendo fora do espaco alocado de memoria (' + pc + ').',
  //     PC: null,
  //   }
  // }
  //
  // return {
  //   success: true,
  //   regs: {
  //     PC: pc+1,
  //     _PC2: pc,
  //     IR: code[pc],
  //   }
  // }

  var bits = registers.IR.split(' ');

  switch (bits[0].trim()) {
    case 'MOV':
      registers[bits[1]] = valueOf(bits[2], registers);
      registers = clearEflags(registers);
      break;

    case 'PUSH':
      stack.push(valueOf(bits[1], registers));
      registers.SP++;
      registers = clearEflags(registers);
      break;

    case 'POP':
      registers[bits[1]] = stack.pop();
      registers.SP--;
      registers = clearEflags(registers);
      break;

    case 'ADD':
      registers[bits[1]] += valueOf(bits[2], registers);
      registers = setEflags(registers, bits[1]);
      break;

    case 'SUB':
      registers[bits[1]] -= valueOf(bits[2], registers);
      registers = setEflags(registers, bits[1]);
      break;

    case 'INC':
      registers[bits[1]]++;
      registers = setEflags(registers, bits[1]);
      break;

    case 'DEC':
      registers[bits[1]]--;
      registers = setEflags(registers, bits[1]);
      break;

    case 'IMUL':
      registers[bits[1]] *= valueOf(bits[2], registers);
      registers = setEflags(registers, bits[1]);
      break;

    case 'IMUL':
      registers[bits[1]] *= valueOf(bits[2], registers);
      registers = setEflags(registers, bits[1]);
      break;

    case 'IDIV':
      quo = (registers[bits[1]] / registers[bits[2]])|0;
      registers[bits[2]] = Number(registers[bits[1]]) % Number(registers[bits[2]]);
      registers[bits[1]] = quo;
      registers = setEflags(registers, bits[1]);
      break;

    case 'AND':
      registers[bits[1]] &= valueOf(bits[2], registers);
      registers = setEflags(registers, bits[1]);
      registers.SF = null;
      break;

    case 'OR':
      registers[bits[1]] |= valueOf(bits[2], registers);
      registers = setEflags(registers, bits[1]);
      registers.SF = null;
      break;

    case 'XOR':
      registers[bits[1]] ^= valueOf(bits[2], registers);
      registers = setEflags(registers, bits[1]);
      registers.SF = null;
      break;

    case 'NOT':
      registers[bits[1]] = -valueOf(bits[1], registers);
      registers = setEflags(registers, bits[1]);
      break;

    case 'SHL':
      registers[bits[1]] <<= valueOf(bits[2], registers);
      registers = setEflags(registers, bits[1]);
      break;

    case 'SHR':
      registers[bits[1]] >>= valueOf(bits[2], registers);
      registers = setEflags(registers, bits[1]);
      break;

    case 'CMP':
      registers.Z = valueOf(bits[1], registers) - valueOf(bits[2], registers) == 0;
      registers.SF = valueOf(bits[1], registers) - valueOf(bits[2], registers) < 0;
      break;

    case 'JMP':
      registers.PC = valueOf(bits[1], registers) - 1;
      break;

    case 'JE':
      if(registers.Z)
        registers.PC = valueOf(bits[1], registers) - 1;
      break;

    case 'JNE':
      if(!registers.Z)
        registers.PC = valueOf(bits[1], registers) - 1;
      break;

    case 'JZ':
      if(registers.Z)
        registers.PC = valueOf(bits[1], registers) - 1;
      break;

    case 'JG':
      if(!registers.Z && !registers.SF)
        registers.PC = valueOf(bits[1], registers) - 1;
      break;

    case 'JGE':
      if(registers.Z || !registers.SF)
        registers.PC = valueOf(bits[1], registers) - 1;
      break;

    case 'JL':
      if(!registers.Z && registers.SF)
        registers.PC = valueOf(bits[1], registers) - 1;
      break;

    case 'JGE':
      if(registers.Z || registers.SF)
        registers.PC = valueOf(bits[1], registers) - 1;
      break;
  }

  return {
    success: true,
    registers: registers,
    stack: {contents: stack},
  }
};
