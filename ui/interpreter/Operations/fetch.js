module.exports = function(operation, code, pc) {
  if(pc >= code.length || pc < 0){
    return {
      success: false,
      error: 'Salto para fora do espaco de memoria alocado (' + String(pc) + ').',
      PC: null,
    }
  }
  
  if(code[pc].scan.length < 1) return {success: true, halt: true};
  while(code[pc].scan[0].token == 'COMMENT' || code[pc].whole.length < 1){
    pc++;
    if(pc >= code.length || code[pc].scan.length < 1) {
      return {success: true, halt: true};
    }
  }

  return {
    success: true,
    registers: {
      PC: pc+1,
      IR: code[pc].whole,
      _IR: code[pc]
    }
  }
};
