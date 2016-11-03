var React = require('react');
var Button = require('../Button');

module.exports = React.createClass({
  displayName: 'OpcodeHelp',

  PropTypes: {
    opcodes: React.PropTypes.object,
    registers: React.PropTypes.array,
  },

  getInitialState: function(){
    return {
      open: false,
    };
  },

  _openWindow: function() {
    this.setState({open: true});
  },

  _closeWindow: function() {
    this.setState({open: false});
  },

  _registers: function(){
    var style = {
      color: 'rgba(255, 255, 255, .8)',
      fontSize: '28px',
      display: 'inline-block',
      width: '150px',
      fontFamily: "'Conv_mini_pixel-7'",
    };

    var registers;
    if(this.props.registers.length == 1){
      registers = this.props.registers[0];
    } else if(this.props.registers.length == 2){
      registers = this.props.registers[0] + ' e ' + this.props.registers[1];
    } else {
      registers = this.props.registers.slice(0, this.props.registers.length-1).join(', ');
      registers += ' e ' + this.props.registers[this.props.registers.length-1];
    }

    return <div style={style}>{registers}</div>
  },

  _opcodes: function(){
    var styles = {
      text: {
        color: 'rgba(255, 255, 255, .8)',
        fontSize: '28px',
        display: 'inline-block',
        width: '150px',
        fontFamily: "'Conv_mini_pixel-7'",
      },

      comment: {
        color: '#5C6363',
        fontSize: '28px',
        // fontStyle: 'italic',
        display: 'inline-block',
        fontFamily: "'Conv_mini_pixel-7'",
        width: 'calc(100% - 155px)',
      }
    }

    var opcodes = Object.keys(this.props.opcodes);
    var result = [];

    for(var i = 0 ; i < opcodes.length ; i++){
      var opc = opcodes[i];
      var args = this.props.opcodes[opc][0];
      var desc = this.props.opcodes[opc][1];
      var arglist = Array.apply(null, Array(args)).map(function (_, i) {return String.fromCharCode(65 + i) + ' ';});
      var text = opc + ' ' + arglist.join('')

      result.push(
        <span key={i}>
          <div style={styles.text}>{text}</div>
          <div style={styles.comment}>; {desc}</div>
        </span>
      );
    }
    console.log(result);
    return result;
  },

  render: function(){
    var styles = {
      overlay: {
        position: 'fixed',
        backgroundColor: 'rgba(0, 0, 0, .6)',
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px',
      },

      helpModal: {
        // height: 'calc(100vh - 40px)',
        maxHeight: '600px',
        width: 'calc(100vw - 40px)',
        maxWidth: '1000px',
        backgroundColor: '#21252B',
        borderRadius: '4px',
        padding: '20px',
      },

      helpWindow:{
        position: 'fixed',
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },

      title: {
        paddingLeft: '20px',
        fontSize: '60px',
        fontFamily: "'Conv_mini_pixel-7'",
        color: 'rgba(255, 255, 255, .8)',
      },


    };

    var helpWindow;

    if(this.state.open) {
        helpWindow = (
          <span onClick={this._closeWindow}>
            <div style={styles.overlay}/>
            <span style={styles.helpWindow}>
              <div style={styles.helpModal}>
                <div style={styles.title}>Registradores</div>
                {this._registers()}
                <div style={styles.title}>OpCodes</div>
                {this._opcodes()}
              </div>
            </span>
          </span>
        );
    }

    return (
      <span>
        <Button onClick={this._openWindow}>
          OpCodes
        </Button>
        {helpWindow}
      </span>
    );
  },
});
