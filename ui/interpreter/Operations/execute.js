function setEflags(registers, regArg){
  registers.Z = registers[regArg.val] == 0;
  registers.SF = registers[regArg.val] < 0;
  return registers;
}

function clearEflags(registers){
  registers.Z = null;
  registers.SF = null;
}

function getArg(arg, p){
  return arg[p].actual;
}

function setArg(arg, mem, regs, val){
  if(arg.type == 'REG') {
    regs[arg.val] = val;
    return;
  }

  if(arg.type == 'REG_ADDR'){
    var addr = regs[arg.val];
    mem.contents[addr] = val;
    return;
  }

  if(arg.type == 'CON_ADDR'){
    mem.contents[arg.val] = val;
    return;
  }

  if(arg.type == 'NUM') {
    return '[ ' + regs.PC + ' ] Tentado atribuir valor a uma constante.';
  }

  if(arg.type == 'LABEL') {
    return '[ ' + regs.PC + ' ] Tentado atribuir valor a uma label.';
  }

  return '[ ' + regs.PC + ' ] Atribuicao invalida.'
}

module.exports = function(operation, instruction, registers, stack, memory) {
  var halt = false;
  var info;
  var args = registers._ARGS;

  console.log('args on execute', args);

  switch (registers._OP.trim()) {
    case 'MOV':
      var ret = setArg(args[0], memory, registers, getArg(args, 1));
      if(ret) return { success: false, error: ret}
      registers = clearEflags(registers);
      break;

    case 'PUSH':
      if(registers.SP >= stack.limit){
        return {
          success: false,
          error: '[ ' + registers.PC + ' ] Stack smashing detectado.',
        };
      }

      stack.contents.push(getArg(args, 0));
      registers.SP++;

      registers = clearEflags(registers);
      break;

    case 'POP':
      if(registers.SP <= 0){
        return {
          success: false,
          error: '[ '+registers.PC+' ] Stack vazio.',
        };
      }

      var ret = setArg(args[0], memory, registers, stack.contents.pop());
      registers.SP--;
      registers = clearEflags(registers);
      break;

    case 'ADD':
      var ret = setArg(args[0], memory, registers, getArg(args, 0) + getArg(args, 1));
      if(ret) return { success: false, error: ret}
      registers = setEflags(registers, args[0]);
      break;

    case 'SUB':
      var ret = setArg(args[0], memory, registers, getArg(args, 0) - getArg(args, 1));
      if(ret) return { success: false, error: ret}
      registers = setEflags(registers, args[0]);
      break;

    case 'INC':
      var ret = setArg(args[0], memory, registers, getArg(args, 0) + 1);
      if(ret) return { success: false, error: ret}
      registers = setEflags(registers, args[0]);
      break;

    case 'DEC':
      var ret = setArg(args[0], memory, registers, getArg(args, 0) - 1);
      if(ret) return { success: false, error: ret}
      registers = setEflags(registers, args[0]);
      break;

    case 'IMUL':
      var ret = setArg(args[0], memory, registers, getArg(args, 0) * getArg(args, 1));
      if(ret) return { success: false, error: ret}
      registers = setEflags(registers, args[0]);
      break;

    case 'IDIV':
      if(getArg(args, 1) == 0){
        return {
          success: false,
          error: '[ '+registers.PC+' ] Divisao por zero.',
        };
      }
      quo = (getArg(args, 0) / getArg(args, 1))|0;

      var ret = setArg(args[1], memory, registers, getArg(args, 0) % getArg(args, 1));
      if(ret) return { success: false, error: ret}

      var ret = setArg(args[0], memory, registers, quo);
      if(ret) return { success: false, error: ret}

      registers = setEflags(registers, args[0]);
      break;

    case 'AND':
      var ret = setArg(args[0], memory, registers, getArg(args, 0) & getArg(args, 1));
      if(ret) return { success: false, error: ret}
      registers = setEflags(registers, args[0]);
      registers.SF = null;
      break;

    case 'OR':
      var ret = setArg(args[0], memory, registers, getArg(args, 0) | getArg(args, 1));
      if(ret) return { success: false, error: ret}
      registers = setEflags(registers, args[0]);
      registers.SF = null;
      break;

    case 'XOR':
      var ret = setArg(args[0], memory, registers, getArg(args, 0) ^ getArg(args, 1));
      if(ret) return { success: false, error: ret}
      registers = setEflags(registers, args[0]);
      registers.SF = null;
      break;

    case 'NOT':
      var ret = setArg(args[0], memory, registers, -getArg(args, 0));
      if(ret) return { success: false, error: ret}
      registers = setEflags(registers, args[0]);
      registers.SF = null;
      break;

    case 'SHL':
      var ret = setArg(args[0], memory, registers, getArg(args, 0) << getArg(args, 1));
      if(ret) return { success: false, error: ret}
      registers = setEflags(registers, args[0]);
      break;

    case 'SHR':
      var ret = setArg(args[0], memory, registers, getArg(args, 0) >> getArg(args, 1));
      if(ret) return { success: false, error: ret}
      registers = setEflags(registers, args[0]);
      break;

    case 'CMP':
      registers.Z = getArg(args, 0) - getArg(args, 1) == 0;
      registers.SF = getArg(args, 0) - getArg(args, 1) < 0;
      break;

    case 'JMP':
      registers.PC = getArg(args, 0) - 1;
      break;

    case 'JE':
      if(registers.Z)
        registers.PC = getArg(args, 0) - 1;
      break;

    case 'JNE':
      if(!registers.Z)
        registers.PC = getArg(args, 0) - 1;
      break;

    case 'JZ':
      if(registers.Z)
        registers.PC = getArg(args, 0) - 1;
      break;

    case 'JG':
      if(!registers.Z && !registers.SF)
        registers.PC = getArg(args, 0) - 1;
      break;

    case 'JGE':
      if(registers.Z || !registers.SF)
        registers.PC = getArg(args, 0) - 1;
      break;

    case 'JL':
      if(!registers.Z && registers.SF)
        registers.PC = getArg(args, 0) - 1;
      break;

    case 'JGE':
      if(registers.Z || registers.SF)
        registers.PC = getArg(args, 0) - 1;
      break;

    case 'HLT':
      halt = true;
      break;

    case 'PRS':
      info = stack.contents.join(' ');
  }

  return {
    success: true,
    halt: halt,
    registers: registers,
    stack: stack,
    memory: memory,
    info: info,
  }
};
