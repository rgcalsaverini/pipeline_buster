function valueOf(arg, regs){
  if(arg.type == 'NUM')
    return arg.val;
  else if(arg.type == 'REG')
    return regs[arg.val];
}

function setEflags(registers, regArg){
  registers.Z = registers[regArg.val] == 0;
  registers.SF = registers[regArg.val] < 0;
  return registers;
}

function clearEflags(registers){
  registers.Z = null;
  registers.SF = null;
}

module.exports = function(operation, instruction, registers, stack) {
  var halt = false;
  var info;
  var args = registers._ARGS;

  console.log('registers', registers);

  switch (registers._OP.trim()) {
    case 'MOV':
      console.log('INSIDE MOV');
      registers[args[0].val] = valueOf(args[1], registers);
      console.log('INSIDE MOV');
      registers = clearEflags(registers);
      break;

    case 'PUSH':
      stack.push(valueOf(args[0], registers));
      registers.SP++;
      registers = clearEflags(registers);
      break;

    case 'POP':
      registers[args[0].val] = stack.pop();
      registers.SP--;
      registers = clearEflags(registers);
      break;

    case 'ADD':
      registers[args[0].val] += valueOf(args[1], registers);
      registers = setEflags(registers, args[0]);
      break;

    case 'SUB':
      registers[args[0].val] -= valueOf(args[1], registers);
      registers = setEflags(registers, args[0]);
      break;

    case 'INC':
      registers[args[0].val]++;
      registers = setEflags(registers, args[0]);
      break;

    case 'DEC':
      registers[args[0].val]--;
      registers = setEflags(registers, args[0]);
      break;

    case 'IMUL':
      registers[args[0].val] *= valueOf(args[1], registers);
      registers = setEflags(registers, args[0]);
      break;

    case 'IDIV':
      if(registers[args[1].val] == 0){
        return {
          success: false,
          message: '[ '+registers.PC+' ] Divisao por zero.',
        };
      }
      quo = (registers[args[0].val] / registers[args[1].val])|0;
      registers[args[1].val] = Number(registers[args[0].val]) % Number(registers[args[1].val]);
      registers[args[0].val] = quo;
      registers = setEflags(registers, args[0]);
      break;

    case 'AND':
      registers[args[0].val] &= valueOf(args[1], registers);
      registers = setEflags(registers, args[0]);
      registers.SF = null;
      break;

    case 'OR':
      registers[args[0].val] |= valueOf(args[1], registers);
      registers = setEflags(registers, args[0]);
      registers.SF = null;
      break;

    case 'XOR':
      registers[args[0].val] ^= valueOf(args[1], registers);
      registers = setEflags(registers, args[0]);
      registers.SF = null;
      break;

    case 'NOT':
      registers[args[0].val] = -valueOf(args[0], registers);
      registers = setEflags(registers, args[0]);
      break;

    case 'SHL':
      registers[args[0].val] <<= valueOf(args[1], registers);
      registers = setEflags(registers, args[0]);
      break;

    case 'SHR':
      registers[args[0].val] >>= valueOf(args[1], registers);
      registers = setEflags(registers, args[0]);
      break;

    case 'CMP':
      registers.Z = valueOf(args[0], registers) - valueOf(args[1], registers) == 0;
      registers.SF = valueOf(args[0], registers) - valueOf(args[1], registers) < 0;
      break;

    case 'JMP':
      registers.PC = valueOf(args[0], registers) - 1;
      break;

    case 'JE':
      if(registers.Z)
        registers.PC = valueOf(args[0], registers) - 1;
      break;

    case 'JNE':
      if(!registers.Z)
        registers.PC = valueOf(args[0], registers) - 1;
      break;

    case 'JZ':
      if(registers.Z)
        registers.PC = valueOf(args[0], registers) - 1;
      break;

    case 'JG':
      if(!registers.Z && !registers.SF)
        registers.PC = valueOf(args[0], registers) - 1;
      break;

    case 'JGE':
      if(registers.Z || !registers.SF)
        registers.PC = valueOf(args[0], registers) - 1;
      break;

    case 'JL':
      if(!registers.Z && registers.SF)
        registers.PC = valueOf(args[0], registers) - 1;
      break;

    case 'JGE':
      if(registers.Z || registers.SF)
        registers.PC = valueOf(args[0], registers) - 1;
      break;

    case 'HLT':
      halt = true;
      break;

    case 'PRS':
      info = stack.join(' ');
  }

  return {
    success: true,
    halt: halt,
    registers: registers,
    stack: {contents: stack},
    info: info,
  }
};
