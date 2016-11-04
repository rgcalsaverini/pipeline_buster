var React = require('react');
var ReactDOM = require('react-dom');
var CodeInput = require('../components/CodeInput');
var Pannel = require('../components/Pannel');
var request = require('../utils/request.js');

var ReactComponents = (function () {
  var _machine;

  var initCodeInput = function(el, opcodes, registers, limitLines) {
    ReactDOM.render(
      <CodeInput
        opcodes={opcodes}
        registers={registers}
        limitLines={limitLines}/>,
        el
      );
  };

  var initPannel = function(el, data) {
    ReactDOM.render(<Pannel data={data}/>, el);
  };

  var loadMachine = function(machine_id, input_el, pannel_el){
    request.get('/machine/' + machine_id).then(
      function(result){
        _machine = result;
        initCodeInput(input_el, _machine.opcodes, _machine.gprs, _machine.code.limit);
        initPannel(pannel_el, _machine);
      },
    );

  };

  return {
    loadMachine: loadMachine,
  };
})();

module.exports = (function(){
  window.components = ReactComponents;
})()
