var React = require('react');
var ReactDOM = require('react-dom');
var CodeInput = require('../components/CodeInput');
var Pannel = require('../components/Pannel');
var Pipeline = require('../components/Pipeline');
var Announcment = require('../components/Announcment');
var Opening = require('../components/Opening');
var request = require('../utils/request.js');
var merge = require('../utils/merge.js');
var MachineSim = require('../interpreter/machine.js');


var ReactComponents = (function () {
  var _machine;
  var _code = [];
  var _input_el;
  var _pannel_el;
  var _pipeline_el;
  var _info_el;
  var _stopCallback;

  var loadOpening = function(el){
    ReactDOM.render(
      <Opening/>,
        el
      );
  };

  var _initCodeInput = function(el, opcodes, registers, limitLines, locked, highlight, error) {
    ReactDOM.render(
      <CodeInput
        opcodes={opcodes}
        registers={registers}
        limitLines={limitLines}
        limitMem={_machine.memory.limit}
        limitStack={_machine.stack.limit}
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

  var _initPipeline = function(el, stages) {
    ReactDOM.render(<Pipeline stages={stages}/>, el);
  };

  var manageInformation = function(hide, info, title, destroyed){
    ReactDOM.render(
      <Announcment
        hide={hide}
        title={title}
        destroyed={destroyed}
        onClick={destroyed ? _gotoOpening : _dismissInfo}
      >
        {info}
      </Announcment>, _info_el
    );
  };

  var _gotoOpening = function(){
    document.location.href = '/';
  };

  var _dismissInfo = function(){
    manageInformation(true, '','', false);
  };

  var _handleCodeChange = function(value){
    _code = value;
  };

  var _machineStoped = function(){
    _stopCallback();
    _initCodeInput(_input_el, _machine.opcodes, _machine.gprs, _machine.code.limit);
    _initPannel(_pannel_el, _machine);
  };

  var loadMachine = function(machine_id, input_el, pannel_el, pipeline_el, info_el){
    _input_el = input_el;
    _pannel_el = pannel_el;
    _pipeline_el = pipeline_el;
    _info_el = info_el;

    request.get('/machine/' + machine_id).then(
      function(result){
        _machine = result;
        manageInformation(false, _machine.infoMission, _machine.infoTitle);
        _initCodeInput(input_el, _machine.opcodes, _machine.gprs, _machine.code.limit);
        _initPannel(pannel_el, _machine);
        _initPipeline(pipeline_el, _machine.pipeline);
        MachineSim.init(_machine.gprs, _machine.returnRegister,
          _machine.pipeline, _machine.opcodes, _machine.cycle,
          _machine.memory, _machine.stack);
      },
    );
  };

  var _checkVictory = function() {
    var won = eval(_machine.winCondition);
    if(won){
      if(MachineSim.isRunning()){
        MachineSim.stop();
      }

      _machine.status = 'quebrado';

      window.setTimeout(function(){
        manageInformation(false, _machine.infoWon, 'Muahahaha!', true);
      }, 1200);

    }
  };

  var messageMachine = function(type, args){
      if(type == 'error'){
        _machine.message = 'Erro: ' + args[0];
        _machine.messageError = true;
        console.error('Erro: ' + args[0]);
        _checkVictory();
        _initPannel(_pannel_el, _machine);
      }

      else if(type == 'update'){
        _machine.status = args[0];
        _machine.registers = args[1];
        _machine.stack = args[2];
        _checkVictory();
        _initPannel(_pannel_el, _machine);
        _initCodeInput(_input_el, _machine.opcodes, _machine.gprs,
          _machine.code.limit, true, _machine.registers.PC, _machine.messageError)
      }

      else if(type == 'info'){
        _machine.message = args[0];
        _machine.messageError = false;
        _checkVictory();
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

  var speedUpCycle = function(){
    _machine.cycle = MachineSim.speedUpCycle();
    _initPannel(_pannel_el, _machine);
  };

  var slowDownCycle = function(){
    _machine.cycle = MachineSim.slowDownCycle();
    _initPannel(_pannel_el, _machine);
  };

  return {
    loadOpening: loadOpening,
    loadMachine: loadMachine,
    manageInformation: manageInformation,
    messageMachine: messageMachine,
    runMachine: runMachine,
    slowDownCycle: slowDownCycle,
    speedUpCycle: speedUpCycle,
    stopMachine: stopMachine,
  };
})();

module.exports = (function(){
  window.components = ReactComponents;
})();
