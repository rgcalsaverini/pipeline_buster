var React = require('react');
var ReactDOM = require('react-dom');
var CodeInput = require('../components/CodeInput');
var Pannel = require('../components/Pannel');

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

  var initPannel = function(el) {
    ReactDOM.render(<Pannel/>, el);
  };

  return {
    initCodeInput: initCodeInput,
    initPannel: initPannel,
  };
})();

module.exports = (function(){
  window.components = ReactComponents;
})()
