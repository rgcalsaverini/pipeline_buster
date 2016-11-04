(function(){
  var _init = function() {
    var codeInputElement = document.getElementById("code-input");
    var pannelElement = document.getElementById("pannel");

    window.components.loadMachine(0, codeInputElement, pannelElement);
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
