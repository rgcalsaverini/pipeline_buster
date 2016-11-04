function fail(message, pc){
  return {
    success: false,
    error: '[ ' + pc + ' ] ' + message,
  }
}

function failOper(pc, inst, exp, rec){
  return fail('Instrucao ' + inst + ' recebeu ' + rec + ' operadores quando deveria receber ' + exp, pc);
}

function failMustBeReg(pc, inst, pos){
  return fail('Instrucao ' + inst + ' espera um registrador valido na posicao ' + pos, pc);
}

function failInvalidSymbol(pc, inst, pos){
  return fail('Instrucao ' + inst + ' recebeu um simbolo invalido na posicao ' + pos, pc);
}

function failNotFound(pc, inst){
  return fail('Instrucao ' + inst + ' nao faz parte dos opcodes deste sistema', pc);
}

firstMustBeReg = ['MOV', 'POP', 'ADD', 'SUB', 'INC', 'DEC', 'IMUL', 'IDIV', 'AND', 'OR', 'XOR', 'NOT', 'SHL', 'SHR']
seccondMustBeReg = ['IMUL', 'IDIV']

module.exports = function(operation, instruction, gprs, pc, valid_opcodes) {
  var bits = instruction.split(' ');

  if(Object.keys(valid_opcodes).indexOf(bits[0]) == -1){
    return failNotFound(pc, bits[0]);
  }

  if(bits.length-1 != valid_opcodes[bits[0]][0]){
    return failOper(pc, bits[0], valid_opcodes[bits[0]][0], bits.length-1);
  }

  for(var i = 1 ; i < bits.length ; i++){
    if(isNaN(Number(bits[i])) && gprs.indexOf(bits[i]) == -1) return failInvalidSymbol(pc, bits[0], i);
  }

  if(firstMustBeReg.indexOf(bits[0]) != -1){
    if(gprs.indexOf(bits[1]) == -1) return failMustBeReg(pc, bits[0], 1);
  }

  if(seccondMustBeReg.indexOf(bits[0]) != -1){
    if(gprs.indexOf(bits[2]) == -1) return failMustBeReg(pc, bits[0], 2);
  }

  return {
    success: true,
  }
};
