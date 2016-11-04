var Operations = require('./Operations');
var merge = require('../utils/merge.js');


module.exports = (function(){
  var _running = false;
  var _regs;
  var _regs;
  var _stack;
  var _clockCycle = 1000;
  var _stages;
  var _code;
  var _intervalID;
  var _returnRegister;

  var __fetchOps = ['ins_fetch'];

  var init = function(registers, returnRegister, stages){
    _regs = {};

    for(var i = 0 ; i < registers.length ; i++){
      _regs[registers[i]] = 0;
    }

    _regs.PC = 0;
    _regs.PC2 = 0;
    _regs.SP = 0;
    _regs.IR = null;
    _regs.Z = false;
    _regs.SN = false;

    _returnRegister = returnRegister;

    _stack = [];
    _stages = stages;
  };

  var stop = function(communication){
    console.log('STOP: ', communication);
    var _running = false;
    window.clearInterval(_intervalID);

    if(typeof communication !== 'undefined'){
      status = _regs[_returnRegister];
      communication('info', ['Programa finalizou com status ' + status]);
      communication('update', ['desligado', _regs, _stack]);
    }
  };

  var setCycleDelay = function(delay) {
    _clockCycle = delay;
  };

  var run = function(code, communication, stopCallback){
    console.log('CODE: ', code);
    _code = code;
    _regs.PC = 0;

    for(var i = 0 ; i < _stages.length ; i++){
      _stages[i].in = null;
      _stages[i].out = null;
    }

    var _running = true;
    _intervalID = window.setInterval(_cycle.bind(null, communication, stopCallback), _clockCycle);
    communication('update', ['rodando', _regs, _stack]);
  };

  var _cycle = function(communication, stopCallback){
    var communicate = true;

    console.log('--------| Cycle |--------');
    for(var i = 0 ; i < _stages.length ; i++){
      if(!_runStage(_stages[i], communication)){
        communicate = false;
        stopCallback();
        break;
      }

      if(_stages[i].in == null){
        break;
      }
    }

    if(communicate){
      console.log('-> communicating');
      communication('update', ['rodando', _regs, _stack]);
    }
  };

  var _runStage = function(stage, communication){
    for(var i = 0 ; i < stage.operations.length ; i++){
      var operation = stage.operations[i];

      if(__fetchOps.indexOf(operation) > -1) {
        if(!_runStageFetch(stage, operation, communication)){
          return false;
        }
      }
    }

      return true;
    };

  var _runStageFetch = function(stage, operation, communication){
    if(_regs.PC == _code.length){
      stop(communication);
      return false;
    }

    res = Operations.fetch(operation, _code, _regs.PC, _regs.PC2);

    if(!_processRes(res, communication)){
      return false;
    }
    return true;
  };


  var _processRes = function(res, communication){
    _regs = merge(_regs, res.regs);

    if(!res.success){
      stop();
      communication('error', [res.error]);
      return false;
    }

    return true;
  };

  return {
    init: init,
    run: run,
    stop: stop,
    setCycleDelay: setCycleDelay,
  };
})();
