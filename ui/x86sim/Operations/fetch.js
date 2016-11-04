module.exports = function(operation, code, pc, pc2) {
  if(pc >= code.length){
    return {
      success: false,
      error: 'Linha ' + pc2 + ' Lendo fora do espaco alocado de memoria (' + pc + ').',
      PC: null,
    }
  }

  return {
    success: true,
    regs: {
      PC: pc+1,
      PC2: pc,
      IR: code[pc],
    }
  }
};
