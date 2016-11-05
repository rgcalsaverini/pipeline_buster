var React = require('react');
var CodeLine = require('./CodeLine.jsx');
var LockIcon = require('../Icons').Lock;
var Lex = require('../../interpreter/lex.js');


module.exports = React.createClass({
  displayName: 'InputArea',

  PropTypes: {
    height: React.PropTypes.number,
    opcodes: React.PropTypes.object,
    registers: React.PropTypes.array,
    limitLines: React.PropTypes.number,
    locked: React.PropTypes.boolean,
    onChange: React.PropTypes.func,
    highlightLine: React.PropTypes.number,
    highlightError: React.PropTypes.boolean,
  },

  componentWillMount: function(){
    this._lineHeight = 25;
  },

  getInitialState: function(){
    return {
      code: '',
      scan: [{scan:[], whole: ''}],
      focus: false,
      caret: 0,
    };
  },

  _evaluateLines: function(lines){
    var correctedLines = [];
    var scan = []
    var numLines = (this.props.height / this._lineHeight)|0;
    numLines = this.props.limitLines ? Math.min(numLines, this.props.limitLines) : numLines;

    for(var i = 0 ; i < lines.length && i < numLines; i++){
      var line = lines[i];
      var lexEval = Lex.evalLine(line);
      var lexWhole = lexEval.whole;

      scan.push(lexEval);

      if(lexWhole.length > 0){
        lexWhole = lexWhole.toUpperCase();
        correctedLines.push(lexWhole);
      }
    }

    if(lines[lines.length-1] == '' && i < numLines)
      correctedLines.push('');

    return [correctedLines, scan];
  },

  _handleChange: function(event){
    var evaluation = this._evaluateLines(event.target.value.toUpperCase().split(/\n|\r/));
    var lines = evaluation[0].join('\n');
    var scan = evaluation[1];
    this.props.onChange(scan);
    var oldLen = this.state.code.lenght;


    this.setState({code: lines, scan: scan}, function(oldLen){
      this._inputRef.selectionEnd = this._inputRef.selectionStart = this.state.caret+1;
    }.bind(this, oldLen));
  },

  _handleFocus: function(){
    this._getCaret();
    this.setState({focus: true});
  },

  _handleBlur: function(){
    this.setState({focus: false});
  },

  // _caretToEnd: function(){
  //   this._inputRef.selectionStart = this._inputRef.selectionEnd = this.state.code.length+1;
  // },

  _getCaret: function(){
    this.setState({caret: this._inputRef.selectionStart}, function(){
      this._inputRef.selectionEnd = this._inputRef.selectionStart;
    }.bind(this))
  },

  _getRef: function(ref) {
    this._inputRef = ref;
  },

  _renderCode: function(){
    var highlightLine = this.props.highlightLine;
    var code = this.state.code.split(/\n|\r/);
    var output = [];
    var caret =  typeof highlightLine != 'undefined' ? 0 : this.state.caret;
    for(var i = 0 ; i < code.length ; i++){
      var isCurrent = (caret >= 0 && caret <= code[i].length) || (i == code.length-1 && caret >= 0);

      output.push(
        <CodeLine
          opcodes={this.props.opcodes}
          registers={this.props.registers}
          key={i}
          line={i+1}
          lineHeight={this._lineHeight}
          current={(isCurrent && this.state.focus) || highlightLine == i ? caret : null}
          error={typeof highlightLine != 'undefined' && this.props.highlightError}
          hideCaret={typeof highlightLine != 'undefined'}
        >
          {this.state.scan[i]}
        </CodeLine>
      );

      if(typeof highlightLine == 'undefined'){
        caret = caret - (code[i].length + 1);
      }
    }
    return output;
  },

  render: function(){
    if(!this.props || !this.props.height){
      return (<span/>);
    }

    var numLines = (this.props.height / this._lineHeight)|0;

    var styles = {
      textarea:{
        lineHeight: String(this._lineHeight) + 'px',
        fontFamily: "'Conv_ponde___'",
        fontSize: '20px',
        outline: 'none',
        border: 'none',
        opacity: '.0',
        paddingLeft: '35px',
        position: 'absolute',
        top: '0px',
        width: '100%',
      },

      lineLock: {
        position: 'absolute',
        top: String(this._lineHeight * this.props.limitLines) + 'px',
        width: '100%',
      },

      lockLineLeft: {
        position: 'absolute',
        left: '8px',
        top: '0px',
        height: '10px',
        width: 'calc(50% - 23px)',
        borderBottom: '2px solid #D1965A',
      },

      lockLineRight: {
        position: 'absolute',
        right: '8px',
        top: '0px',
        height: '10px',
        width: 'calc(50% - 23px)',
        borderBottom: '2px solid #D1965A',
      },

      lockIcon: {
        position: 'absolute',
        width: '18px',
        left: 'calc(50% - 9px)',
        top: '-3px',
        fill: '#D1965A',
      },

    }

    var linesLock;

    if(this.props.limitLines && this.props.limitLines < numLines){
      linesLock = (
        <div style={styles.lineLock}>
          <div style={styles.lockLineLeft}/>
          <LockIcon style={styles.lockIcon}/>
          <div style={styles.lockLineRight}/>
        </div>
      );
    }

    var textarea;

    if(!this.props.locked){
      textarea = (
        <textarea
          style={styles.textarea}
          rows={numLines}
          onChange={this._handleChange}
          value={this.state.code}
          ref={this._getRef}
          onFocus={this._handleFocus}
          onBlur={this._handleBlur}
          onClick={this._getCaret}
          onKeyDown={this._getCaret}
          onKeyUp={this._getCaret}
        />
      );
    }

    return (
      <div>
        {this._renderCode()}
        {textarea}
        {linesLock}
      </div>
    );
  },
});

// onFocus={this._caretToEnd}
// onClick={this._caretToEnd}
// onKeyDown={this._caretToEnd}
