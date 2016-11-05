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
    error: React.PropTypes.boolean,
    hideCaret: React.PropTypes.boolean,
  },

  render: function(){
    var lineHeight = String(this.props.lineHeight) + 'px';
    var currentColor = this.props.error ? 'rgba(221, 79, 79, 0.3)': 'rgba(255, 255, 255, .08)';
    var styles = {
      container: {
        backgroundColor: this.props.current != null ? currentColor : 'rgba(0,0,0,0)',
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

    var tokenStyle= {
      'OP': {color: '#D1965A',},
      'LABEL': {color: '#F0CA4D',},
      'COMMENT': {color: 'rgba(255, 255, 255, .3)', fontSize: '18px', marginBottom: '1px',},
      'NUM': {color: '#56B6C2',},
      'ADDR': {color: '#8DC36C',},
      'REG': {color: '#8DC36C', textDecoration: 'underline'},
      'ERROR': {color: '#DD4242',},
    };

    var lexScan = this.props.children;
    var code = []

    if(!lexScan.success){
      if(this.props.current != null){
        code = (<span>{lexScan.whole}</span>);
      }else{
        code = (<span style={tokenStyle['ERROR']}>{lexScan.whole}</span>);
      }
    } else {
      for(var i = 0 ; i < lexScan.scan.length ; i++){
        var token = lexScan.scan[i].token;
        code.push(
          <span key={i}>
            <span key={1} data-token={token} style={tokenStyle[token]}>
              {lexScan.scan[i].val}
            </span>
            <span key={2} style={{textDecoration: 'none'}}>
              {i == lexScan.scan.length - 1 ? "" : " "}
            </span>
          </span>
        );
      }
    }

    var line;

    if(this.props.line){
      line = (<div key={0} style={styles.lineNumber}>{this.props.line}</div>);
    }

    var caret;

    if(this.props.current != null && !this.props.hideCaret){
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
