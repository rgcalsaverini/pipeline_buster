var React = require('react');
var InputArea = require('./InputArea.jsx')


module.exports = React.createClass({
  displayName: 'CodeInput',

  PropTypes: {
    opcodes: React.PropTypes.object,
    registers: React.PropTypes.array
  },

  getInitialState: function(){
    return {
    };
  },

  _getOuterBoxRef: function(ref) {
    if(!ref){
      throw 'Game Error: Failed to get reference of code area.';
    }

    this._outerBoxRef = ref;
    var height = this._outerBoxRef.clientHeight;

    if(!height || height < 100){
      throw 'Game Error: Failed to get height of code area.';
    }

    this.setState({height: height});
  },

  render: function(){
    var styles = {
      container: {
        position: 'fixed',
        top: '15px',
        bottom: '15px',
        left: '66%',
        right: '15px',
      },

      title: {
        paddingLeft: '20px',
        fontSize: '60px',
        fontFamily: "'Conv_mini_pixel-7'",
        color: 'rgba(255, 255, 255, .8)',
      },

      outerBox: {
        position: 'absolute',
        top: '70px',
        bottom: '0px',
        left: '0px',
        right: '0px',
        backgroundColor: '#282C34',
      },
    };
    return (
      <div style={styles.container}>
        <span style={styles.title}>
          Codigo fonte:
        </span>
        <div
          style={styles.outerBox}
          ref={this._getOuterBoxRef}
          >

          <InputArea
            opcodes={this.props.opcodes}
            registers={this.props.registers}
            height={this.state.height}
          />
        </div>
      </div>
    );
  },
});