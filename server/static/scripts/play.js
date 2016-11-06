(function(){
  var _init = function() {
    var codeInputElement = document.getElementById("code-input");
    var pannelElement = document.getElementById("pannel");
    var pipelineElement = document.getElementById("pipeline");

    window.components.loadMachine(window.selectedMachine, codeInputElement,
      pannelElement, pipelineElement);
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
