var React = require('react');
var Caret = require('./Caret.jsx');

module.exports = React.createClass({
  displayName: 'CodeLine',

  PropTypes: {
    line: React.PropTypes.number,
    lineHeight: React.PropTypes.number,
    opcodes: React.PropTypes.object,
    registers: React.PropTypes.array,
    current: React.PropTypes.number,
    onError: React.PropTypes.func,
  },

  // getInitialState: function(){
  //   return {
  //   };
  // },

  _error: function(){
    if(this.props.onError){
      this.props.onError(this.props.line-1);
    }
  },

  render: function(){
    var lineHeight = String(this.props.lineHeight) + 'px';
    var styles = {
      container: {
        backgroundColor: this.props.current > -1 ? 'rgba(255, 255, 255, .08)' : 'rgba(0,0,0,0)',
      },

      code: {
        fontFamily: "'Conv_ponde___'",
        fontSize: '20px',
        lineHeight: lineHeight,
        height: lineHeight,
        backgroundColor: 'rgba(0, 255, 0, 0.01)',
        display: 'inline-block',
        position: 'absolute',
        marginTop: '-' + lineHeight,
        left: this.props.line ? '35px' : '0px',
        color: 'rgba(255, 255, 255, .8)',
      },

      lineNumber: {
        fontFamily: "'Conv_ponde___'",
        fontSize: '15px',
        lineHeight: lineHeight,
        height: lineHeight,
        paddingLeft: '5px',
        color: 'rgba(255, 255, 255, .3)',
        backgroundColor: 'rgba(255, 0, 0, 0.01)',
        position: 'relative',
        width: '20px',
        textAlign: 'right',
      },
    }

    var codeRaw = this.props.children.trim();
    var code = [];
    var codeBits = codeRaw.split(' ');
    var hasOpcode = false;

    /*if(codeRaw[codeRaw.length-1] == ':') {
      code = (<span style={{color: "#E2C08D"}}>{codeRaw}</span>);
    } else*/ if(Object.keys(this.props.opcodes).indexOf(codeBits[0]) > -1){
      if(codeBits.length-1 <= this.props.opcodes[codeBits[0]][0]){
        code.push(<span key={0} style={{color: "#D1965A"}}>{codeBits[0]} </span>);
        hasOpcode = true;
      } else {
        code.push(<span key={0} style={{color: "#DD4242"}}>{codeRaw}</span>);
        this._error();
      }
    } else if(this.props.current == -1){
      code.push(<span key={0} style={{color: "#DD4242"}}>{codeRaw}</span>);
      this._error();
    }else {
      code.push(<span key={0}>{this.props.children}</span>);
    }

    for(var i = 1 ; hasOpcode && i < codeBits.length ; i++){
      if(!isNaN(Number(codeBits[i].trim()))) {
        code.push(<span key={i} style={{color: "#56B6C2"}}>{codeBits[i]} </span>);
      } else if(this.props.registers.indexOf(codeBits[i]) > -1) {
        code.push(<span key={i}><span key={0} style={{color: "#98C379", textDecoration: 'underline'}}>{codeBits[i]}</span><span key={1}> </span></span>);
      } else if(this.props.current == -1) {
        code = (<span key={i} style={{color: "#DD4242"}}>{codeRaw}</span>);
        break;
      } else {
        code.push(<span key={i}>{codeBits[i]} </span>);
      }
    }

    var line;

    if(this.props.line){
      line = (<div key={0} style={styles.lineNumber}>{this.props.line}</div>);
    }

    var caret;

    if(this.props.current > -1){
      caret = (<Caret key={2} lineHeight={this.props.lineHeight} char={this.props.current}/>);
    }

    return (
      <div style={styles.container}>
        {line}
        <div key={1} style={styles.code}>{code}</div>
        {caret}
      </div>
    );
  },
});
//
