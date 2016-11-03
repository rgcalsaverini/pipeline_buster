(function(){
  var _init = function() {
    var codeInputElement = document.getElementById("code-input");
    var opcodes = {
      MOV: 2,
      ADD: 2,
      SUB: 2,
      INC: 1,
    }
    window.components.initCodeInput(codeInputElement, opcodes, ['A', 'B']);
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
