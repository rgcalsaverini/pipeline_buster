(function(){
  var _init = function() {
    var codeInputElement = document.getElementById("code-input");
    var opcodes = {
      MOV: [2, "Move o valor literal ou valor contido no operando A para o operando B"],
      ADD: [2, "Soma os operandos A e B e armazena o resultado no operando A"],
      SUB: [2, "Subtrai os operandos A e B e armazena o resultado no operando A"],
      INC: [1, "Incrementa o operando A por 1"],
    }
    window.components.initCodeInput(codeInputElement, opcodes, ['A', 'B', 'C']);
  };

  if(document.readyState === 'complete') {
    _init();
  }
  else {
    document.addEventListener('DOMContentLoaded', function () {
      _init();
    });
  }
})()
