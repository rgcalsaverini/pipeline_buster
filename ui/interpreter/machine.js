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
  var _clockCycle;
  var _stages;
  var _code;
  var _intervalID;
  var _returnRegister;
  var _gprs;
  var _opcodes
  var _failed;
  var _mem;


  var init = function(registers, returnRegister, stages, opcodes, clock, memory, stack){
    _regs = {};

    _gprs = registers;
    _opcodes = opcodes;
    _clockCycle = clock;
    _mem = memory;

    for(var i = 0 ; i < registers.length ; i++){
      _regs[registers[i]] = 0;
    }

    _regs.PC = 0;
    _regs.SP = 0;
    _regs.IR = null;
    _regs.Z = null;
    _regs.SF = null;
    _regs._LABELS = {};
    _returnRegister = returnRegister;

    _stack = stack;
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

    if(!_loadLabels()){
      return;
    }

    _stack.contents = [];
    _regs.PC = 0;

    // for(var i = 0 ; i < _stages.length ; i++){
    //   _stages[i].in = null;
    //   _stages[i].out = null;
    // }

    var _running = true;
    _intervalID = window.setInterval(_cycle.bind(null, communication, stopCallback), _clockCycle);
    communication('update', ['rodando', _regs, _stack]);
  };

  var _loadLabels = function(){
    for(var i = 0 ; i < _code.length ; i++){
      if(_code[i].scan.length < 1)
        continue

      if(_code[i].scan[0].token == 'LABEL'){
        var newLabel = _code[i].scan[0].val.substr(0, _code[i].scan[0].val.length-1);
        if(Object.keys(_regs._LABELS).indexOf(newLabel) == -1){
          _regs._LABELS[newLabel] = i+1;
        }
        else {
          stop();
          communication('update', ['desligado', _regs, _stack]);
          communication('error', ['[ ' + + ' ] Label ' + newLabel + 'ja foi definida na linha' + _regs._LABELS[newLabel]]);
          _failed = true;
          return false;
        }
      }
    }

    return true;
  };

  var _cycle = function(communication, stopCallback){
    var communicate = true;

    console.log('--------| Cycle |--------');
    // for(var i = 0 ; i < _stages.length ; i++){
      if(!_runStage(_stages[0], communication)){
        communicate = false;
        stopCallback();
        // break;
      }
      // if(_stages[i].in == null){
      //   break;
      // }
    // }

    if(communicate){
      communication('update', ['rodando', _regs, _stack]);
    }

    // _intervalID = window.setTimeout(_cycle.bind(null, communication, stopCallback), _clockCycle);
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
        if(!_failed)
          stop(communication);
        return false;
      }

      res = Operations.fetch(operation, _code, _regs.PC);

      if(!_processRes(res, communication)){
        return false;
      }
      return true;
    };

  var _runStageDecode = function(stage, operation, communication){
    res = Operations.decode(operation, _regs._IR, _regs, _regs.PC, _opcodes, _regs._LABELS, _mem);

    if(!_processRes(res, communication)){
      return false;
    }
    return true;
  };

  var _runStageExecute = function(stage, operation, communication){
    res = Operations.execute(operation, _regs.IR, _regs, _stack, _mem);

    if(!_processRes(res, communication)){
      return false;
    }

    return true;
  };

  var _processRes = function(res, communication){
    _regs = merge(_regs, res.registers);

    if(res.stack)
      _stack = res.stack;

    if(res.memory)
      _mem = res.memory;

    if(res.info)
      communication('info', [res.info]);

    if(!res.success){
      stop();
      communication('update', ['desligado', _regs, _stack]);
      communication('error', [res.error]);
      _failed = true;
      return false;
    }

    if(res.halt)
      _regs.PC = _code.length;

    return true;
  };

  var speedUpCycle = function(){
    _clockCycle = Math.max(100, _clockCycle * 0.7);
    return _clockCycle;
  };

  var slowDownCycle = function(){
    _clockCycle = Math.min(5000, _clockCycle * 1.3);
    return _clockCycle;
  };

  return {
    init: init,
    run: run,
    stop: stop,
    speedUpCycle: speedUpCycle,
    slowDownCycle: slowDownCycle,
    isRunning: function(){return _running;}
  };
})();
