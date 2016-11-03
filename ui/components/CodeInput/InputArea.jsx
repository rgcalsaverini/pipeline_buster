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
    };
  },

  _evaluateLines: function(lines){
    var correctedLines = [];

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

    return correctedLines;
  },

  _handleChange: function(event){
    var lines = this._evaluateLines(event.target.value.split(/\n|\r/));
    this.setState({code: lines.join('\n')})
  },

  _renderCode: function(){
    var code = this.state.code.split(/\n|\r/);
    var output = [];
    for(var i = 0 ; i < code.length ; i++){
      output.push(
        <CodeLine
          opcodes={this.props.opcodes}
          registers={this.props.registers}
          key={i}
          line={i+1}
          lineHeight={this._lineHeight}
          current={i == code.length-1}
        >
          {code[i]}
        </CodeLine>
      );
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
        // backgroundColor: 'rgba(0,0,0,0)',
        outline: 'none',
        border: 'none',
        opacity: '.0',
        position: 'absolute',
        top: '0px',
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
        />
      </div>
    );
  },
});
