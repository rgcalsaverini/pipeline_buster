function getVal(arg, regs, labels, mem, pc){
  var isReg = function(regs, r){
    return Object.keys(regs).indexOf(r) != -1;
  };

  var isLabel = function(labels, l){
    return Object.keys(labels).indexOf(l) != -1;
  };

  if(arg.type == 'NUM'){
    return [true, Number(arg.val)];
  }

  else if(arg.type == 'REG'){
    if(isReg(regs, arg.val))
      return [true, regs[arg.val]];
    else if(isLabel(labels, arg.val))
      return [true, labels[arg.val]];
    else
      return [false, failInvalidReg(pc, arg.val)];
  }

  else if(arg.type == 'REG_ADDR'){
    if(isReg(regs, arg.val))
      return [true, regs[arg.val]];
    else
      return [false, failInvalidReg(pc, arg.val)];

    var addr = Number(regs[arg.val]);

    if(addr >= mem.limit || addr < 0){
      return [false, failOutsideMem(pc, addr)];
    }

    return [true, mem.contents[addr]];
  }

  else if(arg.type == 'CON_ADDR'){
    var addr = Number(arg.val);

    if(addr >= mem.limit || addr < 0){
      return [false, failOutsideMem(pc, addr)];
    }

    return [true, mem.contents[addr]];
  }

  return [false, '[ ' + pc + ' ] Erro desconhecido'];
}

function fail(message, pc){
  if(pc) {
    return {
      success: false,
      error: '[ ' + pc + ' ] ' + message,
    }
  } else {
    return {
      success: false,
      error: message,
    }
  }
}

function failOper(pc, inst, exp, rec){
  return fail('Instrucao ' + inst + ' recebeu ' + rec + ' operadores quando deveria receber ' + exp, pc);
}

function failNotNum(pc, inst, pos){
  return fail('Instrucao ' + inst + ' espera um registrador ou endereco na posicao ' + pos, pc);
}

function failInvalidReg(pc, reg){
  return fail('Registrador ' + reg + ' nao e valido.', pc);
}

function failOutsideMem(pc, addr){
  return fail('Accessando memoria invalida no endereco ' + addr + '.', pc);
}

function failNotFound(pc, inst){
  return fail('Instrucao ' + inst + ' nao faz parte dos opcodes deste sistema', pc);
}

function failAllMem(pc, inst){
  return fail('Instrucao ' + inst + ' nao pode ter todos seus operandos como enderecos', pc);
}


firstNotNum = ['MOV', 'POP', 'ADD', 'SUB', 'INC', 'DEC', 'IMUL', 'IDIV', 'AND', 'OR', 'XOR', 'NOT', 'SHL', 'SHR']
secondNotNum = ['IDIV'];
acceptsLabel = ['JMP', 'JZ', 'JNZ', 'JE', 'JNE', 'JG', 'JGE', 'JL', 'JLE'];

module.exports = function(operation, instruction, registers, pc, valid_opcodes, labels, memory) {
  var operation;
  var args = [];

  for(var i = 0 ; i < instruction.scan.length ; i++){
    var value = instruction.scan[i].val;
    if(instruction.scan[i].token == 'OP')
      operation = value;

    else if(instruction.scan[i].token == 'NUM')
      args.push({type: 'NUM', val: Number(value)});

    else if(instruction.scan[i].token == 'REG')
      args.push({type: 'REG', val: value});

    else if(instruction.scan[i].token == 'CON_ADDR')
      args.push({type: 'CON_ADDR', val: Number(value.substr(1, value.length-2))});

    else if(instruction.scan[i].token == 'REG_ADDR')
      args.push({type: 'REG_ADDR', val: value.substr(1, value.length-2)});
  }

  // Valid opcode
  if(Object.keys(valid_opcodes).indexOf(operation) == -1){
    return failNotFound(pc, operation);
  }

  // Valid number of args
  if(args.length != valid_opcodes[operation][0]){
    return failOper(pc, operation, valid_opcodes[operation][0], args.length);
  }

  // Other lex error
  if(!instruction.success){
    fail(instruction.error, pc);
  }

  // Not all mem
  if(args.length > 1){
    var allMem = true;
    for(var i = 0 ; i < args.length ; i++){
      if(args[i].type != 'CON_ADDR' && args[i].type != 'REG_ADDR'){
        allMem = false;
        break;
      }
    }

    if(allMem)
      return failAllMem(pc, operation);
  }

  // decode args
  for(var i = 0; i < args.length ; i++){
    res = getVal(args[i], registers, labels, memory, pc);

    if(res[0]) {
      args[i].actual = res[1];
    } else {
      return res[1];
    }
  }

  console.log('args on decode ', args);

  return {
    success: true,
    registers: {
      '_OP': operation,
      '_ARGS': args,
    }
  }
};
