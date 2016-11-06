(function(){
  var _init = function() {
    var openingElement = document.getElementById("opening");

    window.components.loadOpening(openingElement);
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
