var React = require('react');
var ReactDOM = require('react-dom');
var CodeInput = require('../components/CodeInput');
var Pannel = require('../components/Pannel');
var request = require('../utils/request.js');
var merge = require('../utils/merge.js');
var MachineSim = require('../x86sim/machine.js');

var ReactComponents = (function () {
  var _machine;
  var _code=[];
  var _input_el;
  var _pannel_el;
  var _stopCallback;

  var _initCodeInput = function(el, opcodes, registers, limitLines, locked, highlight, error) {
    ReactDOM.render(
      <CodeInput
        opcodes={opcodes}
        registers={registers}
        limitLines={limitLines}
        onChange={_handleCodeChange}
        locked={locked}
        highlightLine={highlight}
        highlightError={error}
      />,
        el
      );
  };

  var _initPannel = function(el, data) {
    ReactDOM.render(<Pannel data={data}/>, el);
  };

  var _handleCodeChange = function(value){
    _code = value;
  };

  var _machineStoped = function(){
    _stopCallback();
    _initCodeInput(_input_el, _machine.opcodes, _machine.gprs, _machine.code.limit);
    _initPannel(_pannel_el, _machine);
  };

  var loadMachine = function(machine_id, input_el, pannel_el){
    _input_el = input_el;
    _pannel_el = pannel_el;
    request.get('/machine/' + machine_id).then(
      function(result){
        _machine = result;
        _initCodeInput(input_el, _machine.opcodes, _machine.gprs, _machine.code.limit);
        _initPannel(pannel_el, _machine);
        MachineSim.init(_machine.gprs, _machine.returnRegister, _machine.pipeline);
      },
    );
  };

  var messageMachine = function(type, args){
      console.log('MESSAGE: ', type, args);
      console.log('received message', args);
      if(type == 'error'){
        _machine.message = 'Erro: ' + args[0];
        _machine.messageError = true;
        console.error('Erro: ' + args[0]);
        _initPannel(_pannel_el, _machine);
      }

      else if(type == 'update'){
        _machine.status = args[0];
        _machine.registers = args[1];
        _machine.stack.contents = args[2];
        _initPannel(_pannel_el, _machine);
        _initCodeInput(_input_el, _machine.opcodes, _machine.gprs,
          _machine.code.limit, true, _machine.registers.PC, _machine.messageError)
      }

      else if(type == 'info'){
        _machine.message = args[0];
        _machine.messageError = false;
        _initPannel(_pannel_el, _machine);
      }
  };

  var runMachine = function(startCallback, stopCallback){
    _stopCallback = stopCallback;
    _machine.message = undefined;
    _machine.messageError = false;
    MachineSim.run(_code, messageMachine, _machineStoped);
    _initPannel(_pannel_el, _machine);
    _initCodeInput(_input_el, _machine.opcodes, _machine.gprs, _machine.code.limit, true, 0, false);
    startCallback();
  };

  var stopMachine = function(){
     MachineSim.stop();
    _machine.message = 'Execucao interrompida pelo usuario';
    _machine.messageError = false;
    _machine.status = 'desligado'
    _machineStoped();
  };

  return {
    loadMachine: loadMachine,
    messageMachine: messageMachine,
    runMachine: runMachine,
    stopMachine: stopMachine,
  };
})();

module.exports = (function(){
  window.components = ReactComponents;
})()
