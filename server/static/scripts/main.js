(function(){
  var _init = function() {
    var pipeline = [
      {
        img: 'block',
        text: 'Not Pipelined',
        operations:['ins_fetch', 'decode', 'reg_fetch', 'exec', 'mem', 'write']
      },
    ];

    var opcodes = {
      MOV: [2, "Move o literal ou registrador contido no operando A para o operando B"],
      PUSH: [1, "Coloca o operando no topo da pilha"],
      POP: [1, "Remove um elemento do topo da pilha para o operando"],
      ADD: [2, "Soma os operandos A e B e armazena o resultado no operando A"],
      SUB: [2, "Subtrai os operandos A e B e armazena o resultado no operando A"],
      INC: [1, "Incrementa o operando A por 1"],
      JMP: [1, "Jump incondicional para a linha A"],
      CMP: [2, "Compara os valores dos dois operandos definindo os condition codes da maquina"],
      JE: [1, "Jump condicional igual a"],
      JNE: [1, "Jump condicional diferente de"],
      JZ: [1, "Jump condicional de valor nulo"],
      JG: [1, "Jump condicional maior que"],
      JGE: [1, "Jump condicional maior ou igual a"],
      JL: [1, "Jump condicional menor que"],
      JLE: [1, "Jump condicional menor ou igual a"],
      HLT: [0, "Interrompe a execucao"]
    }

    var codeInputElement = document.getElementById("code-input");
    var pannelElement = document.getElementById("pannel");

    window.components.initCodeInput(codeInputElement, opcodes, ['A', 'B', 'C'], 19);
    window.components.initPannel(pannelElement);
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
