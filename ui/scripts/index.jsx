var React = require('react');
var ReactDOM = require('react-dom');
var CodeInput = require('../components/CodeInput');

var ReactComponents = (function () {
  var initCodeInput = function(el, opcodes, registers) {
    ReactDOM.render(<CodeInput opcodes={opcodes} registers={registers}/>, el);
  };

  return {
    initCodeInput: initCodeInput
  };
})();

module.exports = (function(){
  window.components = ReactComponents;
})()
