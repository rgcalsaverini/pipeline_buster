(function(){
  var _init = function() {
    var codeInputElement = document.getElementById("code-input");
    var pannelElement = document.getElementById("pannel");
    var pipelineElement = document.getElementById("pipeline");
    var infoElement = document.getElementById("announcment");

    window.components.loadMachine(window.selectedMachine, codeInputElement,
      pannelElement, pipelineElement, infoElement);
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
