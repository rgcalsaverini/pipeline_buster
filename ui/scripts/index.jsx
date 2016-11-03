var React = require('react');
var ReactDOM = require('react-dom');
var CodeInput = require('../components/CodeInput');

var ReactComponents = (function () {
  var initCodeInput = function(el, opcodes, registers, limitLines) {
    ReactDOM.render(
      <CodeInput
        opcodes={opcodes}
        registers={registers}
        limitLines={limitLines}/>,
        el
      );
  };

  // var initOpcodeHelp = function(el) {
  //   ReactDOM.render(<OpcodeHelp/>, el);
  // };

  return {
    initCodeInput: initCodeInput,
  };
})();

module.exports = (function(){
  window.components = ReactComponents;
})()
