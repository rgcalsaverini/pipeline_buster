module.exports = function(operation, code, pc) {
  if(pc >= code.length){
    return {
      success: false,
      error: 'Salto para fora do espaco de memoria alocado (' + pc - 1 + ').',
      PC: null,
    }
  }

  // console.log('code: ', code, '  pc: ', pc, ' line: ', code[pc], ' scan: ', code[pc].scan);
  // for(var pc = pc; code[pc].scan[0].token != 'COMMENT' ; pc++ ){
  //   if(pc >= code.length) {
  //     return {success: true, halt: true};
  //   }
  // }

  while(code[pc].scan[0].token == 'COMMENT'){
    pc++;
    if(pc >= code.length) {
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
