var React = require('react');
var CodeLine = require('./CodeLine.jsx');


module.exports = React.createClass({
  displayName: 'InputArea',

  PropTypes: {
    height: React.PropTypes.number,
    opcodes: React.PropTypes.object,
    registers: React.PropTypes.array
  },

  componentWillMount: function(){
    this._lineHeight = 25;
  },

  getInitialState: function(){
    return {
      code: '',
      focus: false,
      caret: 0,
    };
  },

  _evaluateLines: function(lines){
    var correctedLines = [];
    var numLines = (this.props.height / this._lineHeight)|0;

    for(var i = 0 ; i < lines.length ; i++){
      var line = lines[i];

      if(line.length > 0){
        line = line.toUpperCase();
        line = line[line.length-1] == ' ' ? line.trim() + ' ' : line.trim();
        correctedLines.push(line);
      }
    }

    if(lines[lines.length-1] == '')
      correctedLines.push('');

    return correctedLines.slice(0, numLines);
  },

  _handleChange: function(event){
    var lines = this._evaluateLines(event.target.value.split(/\n|\r/));
    this.setState({code: lines.join('\n')}/*, this._caretToEnd*/);
  },

  _handleFocus: function(){
    this._getCaret();
    this.setState({focus: true});
  },

  _handleBlur: function(){
    this.setState({focus: false});
  },

  _caretToEnd: function(){
    this._inputRef.selectionStart = this._inputRef.selectionEnd = this.state.code.length+1;
  },

  _getCaret: function(){
    this.setState({caret: this._inputRef.selectionStart}, function(){
      this._inputRef.selectionEnd = this._inputRef.selectionStart = this.state.caret;
    }.bind(this))
  },

  _getRef: function(ref) {
    this._inputRef = ref;
  },

  _renderCode: function(){
    var code = this.state.code.split(/\n|\r/);
    var output = [];
    var caret = this.state.caret;
    for(var i = 0 ; i < code.length ; i++){
      var isCurrent = (caret >= 0 && caret <= code[i].length) || (i == code.length-1 && caret >= 0);
      output.push(
        <CodeLine
          opcodes={this.props.opcodes}
          registers={this.props.registers}
          key={i}
          line={i+1}
          lineHeight={this._lineHeight}
          current={isCurrent && this.state.focus? caret : -1}
        >
          {code[i]}
        </CodeLine>
      );
      caret = caret - (code[i].length + 1);
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
    }

    return (
      <div>
        {this._renderCode()}
        <textarea
          style={styles.textarea}
          rows={numLines}
          onChange={this._handleChange}
          value={this.state.code}
          ref={this._getRef}
          onFocus={this._handleFocus}
          onBlur={this._handleBlur}
          onClick={this._getCaret}
          onKeyUp={this._getCaret}
        />
      </div>
    );
  },
});

// onFocus={this._caretToEnd}
// onClick={this._caretToEnd}
// onKeyDown={this._caretToEnd}
