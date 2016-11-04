var Operations = require('./Operations');
var merge = require('../utils/merge.js');

var __fetchOps = ['ins_fetch'];
var __decodeOps = ['decode'];
var __executeOps = ['execute'];

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
  var _gprs;
  var _opcodes


  var init = function(registers, returnRegister, stages, opcodes){
    _regs = {};

    _gprs = registers;
    _opcodes = opcodes;

    for(var i = 0 ; i < registers.length ; i++){
      _regs[registers[i]] = 0;
    }

    _regs.PC = 0;
    _regs._PC2 = 0;
    _regs.SP = 0;
    _regs.IR = null;
    _regs.Z = null;
    _regs.SF = null;

    _returnRegister = returnRegister;

    _stack = [];
    _stages = stages;
  };

  var stop = function(communication){
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
    _code = code;
    _stack = [];
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
      // if(_stages[i].in == null){
      //   break;
      // }
    }

    if(communicate){
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

      else if(__decodeOps.indexOf(operation) > -1){
        if(!_runStageDecode(stage, operation, communication)){
          return false;
        }
      }

      else if(__executeOps.indexOf(operation) > -1){
        if(!_runStageExecute(stage, operation, communication)){
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

      res = Operations.fetch(operation, _code, _regs.PC, _regs._PC2);

      if(!_processRes(res, communication)){
        return false;
      }
      return true;
    };

  var _runStageDecode = function(stage, operation, communication){
    res = Operations.decode(operation, _regs.IR, _gprs, _regs.PC, _opcodes);

    if(!_processRes(res, communication)){
      return false;
    }
    return true;
  };

  var _runStageExecute = function(stage, operation, communication){
    res = Operations.execute(operation, _regs.IR, _regs, _stack);
    console.log('res', res);

    if(!_processRes(res, communication)){
      return false;
    }
    console.log('_regs', _regs);

    return true;
  };

  var _processRes = function(res, communication){
    _regs = merge(_regs, res.registers);
    if(res.stack)
      _stack = res.stack.contents;

    if(!res.success){
      stop();
      communication('update', ['desligado', _regs, _stack]);
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
