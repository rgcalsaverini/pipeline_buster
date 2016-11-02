var React = require('react');
var ReactDOM = require('react-dom');
var CodeInput = require('../components/CodeInput');

module.exports = (function () {
  // var ID_LOGIN_CONTAINER = 'app';
  //
  // var _init = function(){
  //   ReactDOM.render(
  //     <AppRouter/>,
  //     document.getElementById(ID_LOGIN_CONTAINER)
  //   );
  // };
  //
  // if(document.readyState === 'complete') {
  //   _init();
  // }
  // else {
  //   document.addEventListener('DOMContentLoaded', function () {
  //     _init();
  //   });
  // }

  var initCodeInput = function(element) {
    ReactDOM.render(<CodeInput/>, element);
  };

  return {
    initCodeInput: initCodeInput
  };
})();
