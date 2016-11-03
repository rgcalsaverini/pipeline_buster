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
  var _communicationCallback;

  var __fetchOps = ['ins_fetch'];

  var init function(registers, stages){
    _regs = {};

    for(var i = 0 ; i < registers.length ; i++){
      _regs[registers[i]] = 0;
    }

    _regs = {
      PC: 0,
      PC2: 0,
      SP: 0,
      IR: null,
      Z: false,
      SN: false,
    }

    _stack = [];
    _stages = stages;
  };

  var stop = function(){
    if(_running){
      var _running = false;
      window.clearInterval(_intervalID);
    }
  };

  var setCycleDelay = function(delay) {
    _clockCycle = delay;
  };

  var run = function(code, communication){
    _code = code;
    _regs.PC = 0;
    _clockCycle = 0;

    for(var i = 0 ; i < _stages.length ; i++){
      _stages[i].in = null;
      _stages[i].out = null;
    }

    var _running = true;
    var _communicationCallback = communication;
    window.setInterval(_cycle(), _clockCycle);
  };

  var _cycle = function(){
    for(var i = 0 ; i < _stages.length ; i++){
      if(!_runStage(_stages[i])){
        return;
      }

      if(_stages[i].in == null){
        break;
      }
    }

    _communicationCallback('update', _regs, _stack);
  };

  var _runStage = function(stage){
    for(var i = 0 ; i < stage.operations.length ; i++){
      var operation = stage.operations[i];

      if(__fetchOps.indexOf(operation) > -1) {
        if(!_runStageFetch){
          return false;
        }
      }

      return true;
    };

    var _runStageFetch = function(stage){
      // End when EOF is reached
      if(_regs.PC == _code.length){
        stop();
        return false;
      }

      res = Operations.fetch(operation, code, _regs.PC, _regs.PC2);

      if(!_processRes(res)){
        return false;
      }
    };
  };

  var _processRes(res){
    _regs = merge(_regs, res.regs);

    if(!res.success){
      _communicationCallback('error', res.error);
      stop();
      return false;
    }

    return true;
  };

  return {
    run: run,
    stop: stop,
    setCycleDelay:
  };
})();
