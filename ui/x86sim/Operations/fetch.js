module.exports = function(operation, code, pc, pc2) {
  if(pc >= code.length){
    return {
      success: false,
      error: 'Salto para fora do espaco de memoria alocado (' + pc - 1 + ').',
      PC: null,
    }
  }

  return {
    success: true,
    registers: {
      PC: pc+1,
      _PC2: pc,
      IR: code[pc],
    }
  }
};
