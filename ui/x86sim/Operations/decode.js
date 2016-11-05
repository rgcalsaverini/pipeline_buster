function fail(message, pc){
  return {
    success: false,
    error: '[ ' + pc + ' ] ' + message,
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

function failNotFound(pc, inst){
  return fail('Instrucao ' + inst + ' nao faz parte dos opcodes deste sistema', pc);
}

function failAllMem(pc, inst){
  return fail('Instrucao ' + inst + ' nao pode ter todos seus operandos como enderecos', pc);
}


firstNotNum = ['MOV', 'POP', 'ADD', 'SUB', 'INC', 'DEC', 'IMUL', 'IDIV', 'AND', 'OR', 'XOR', 'NOT', 'SHL', 'SHR']
secondNotNum = ['IDIV'];
acceptsLabel = ['JMP', 'JZ', 'JNZ', 'JE', 'JNE', 'JG', 'JGE', 'JL', 'JLE'];

module.exports = function(operation, instruction, gprs, pc, valid_opcodes, labels) {
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

    else if(instruction.scan[i].token == 'ADDR')
      args.push({type: 'ADDR', val: value.substr(1, value.length-1)});
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

  // First not num
  if(firstNotNum.indexOf(operation) != -1){
    if(args[0].type == 'NUM'){
      return failNotNum(pc, operation, 1);
    }
  }

  // Second not num
  if(secondNotNum.indexOf(operation) != -1){
    if(args[1].type == 'NUM')
      return failNotNum(pc, operation, 2);
  }

  // Not all mem
  if(args.length > 1){
    var allMem = true;
    for(var i = 0 ; i < args.length ; i++){
      if(args[i].type != 'ADDR'){
        allMem = false;
        break;
      }
    }

    if(allMem)
      return failAllMem(pc, operation);
  }

  // Registers exist
  for(var i = 0 ; i < args.length ; i++){
    if(args[i].type == 'REG' && gprs.indexOf(args[i].val) == -1){
      if(acceptsLabel.indexOf(operation) != -1 && Object.keys(labels).indexOf(args[i].val) != -1){
        args[i] = {type: 'NUM', val: labels[args[i].val]}
      }else{
        return failInvalidReg(pc, args[i].val)
      }
    }
  }

  return {
    success: true,
    registers: {
      '_OP': operation,
      '_ARGS': args,
    }
  }
};
