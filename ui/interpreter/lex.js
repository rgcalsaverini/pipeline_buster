var synErBegin = function(bit, line){
  return {
    success: false,
    error: 'Esperado label, operacao ou comentario. Encontrado \'' + bit + '\'',
    scan: [],
    whole: line,
  };
};

var synErOp = function(bit, line){
  return {
    success: false,
    error: 'Esperada operacao, encontrado \'' +bit + '\'',
    scan: [],
    whole: line,
  };
};

var synErArg = function(bit, line){
  return {
    success: false,
    error: 'Esperado numero, registrador ou endereco. Encontrado \'' +bit + '\'',
    scan: [],
    whole: line,
  };
};

module.exports = (function(){
  var evalLine = function(line){
    if(line.length < 1){
      return {success: true, scan: [], whole: ''};
    }

    var scan = [];
    var whole = '';
    var hasComments = false;
    var bits = line.split(/[\t| ]+/);
    for(var i = 0 ; i < bits.length ; i++){
      // First token must be label, op or comment
      if(i == 0){
        if(_isLabel(bits[i])){
          scan.push({val: bits[i], token: 'LABEL'});
          whole += bits[i] + ' ';
          continue;
        }
        else if(_isOperation(bits[i])){
          scan.push({val: bits[i], token: 'OP'});
          whole += bits[i] + ' ';
          continue;
        }
        else if(_isComment(bits[i])){
          var comment = bits.slice(i, bits.length).join(' ');
          scan.push({val: comment, token: 'COMMENT'});
          whole += comment;
          hasComments = true;
          break;
        }
        else{
          return synErBegin(bits[i], line);
        }
      }

      // If first token was a label, an operation is expected
      if(i == 1 && scan[0].token == 'LABEL'){
        if(_isOperation(bits[i])){
          whole += bits[i] + ' ';
          scan.push({val: bits[i], token: 'OP'});
          continue;
        }
        else{
          return synErOp(bits[i], line);
        }
      }

      // Arbitrary arguments following operation
      if(i > 0 && scan[0].token == 'OP' || i > 1 && scan[1].token == 'OP'){
        if(_isNumber(bits[i])){
          whole += bits[i] + ' ';
          scan.push({val: bits[i], token: 'NUM'});
          continue;
        }
        else if(_isRegister(bits[i])){
          whole += bits[i] + ' ';
          scan.push({val: bits[i], token: 'REG'});
          continue;
        }
        else if(_isConstAddress(bits[i])){
          whole += bits[i] + ' ';
          scan.push({val: bits[i], token: 'CON_ADDR'});
          continue;
        }
        else if(_isRegAddress(bits[i])){
          whole += bits[i] + ' ';
          scan.push({val: bits[i], token: 'REG_ADDR'});
          continue;
        }
        if(_isComment(bits[i])){
          var comment = bits.slice(i, bits.length).join(' ');
          whole += comment;
          scan.push({val: comment, token: 'COMMENT'});
          hasComments = true;
          break;
        }
        else {
          return synErArg(bits[i], line);
        }
      }

      // Opcional comments at the end
      if(_isComment(bits[i])){
        var comment = bits.slice(i, bits.length).join(' ');
        whole += comment;
        scan.push({val: comment, token: 'COMMENT'});
        hasComments = true;
        break;
      }
    }

    return {
      success: true,
      scan: scan,
      whole: hasComments? whole : whole.trim(),
    };
  };

  var _isLabel = function(bit){
    return /^[A-Z]+:$/.test(bit);
  };

  var _isOperation = function(bit){
    return /^[A-Z]+$/.test(bit);
  };

  var _isComment = function(bit){
    return /^;.*$/.test(bit);
  };

  var _isNumber = function(bit){
    return /^-?[0-9]+$/.test(bit);
  };

  var _isRegister = function(bit){
    return /^[A-Z]+$/.test(bit);
  };

  var _isConstAddress = function(bit){
    return /^\[[0-9]+\]$/.test(bit);
  };

  var _isRegAddress = function(bit){
    return /^\[[A-Z]+\]$/.test(bit);
  };

  return {
    evalLine: evalLine,
  }

})();
