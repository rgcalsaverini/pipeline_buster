var React = require('react');
var InputArea = require('./InputArea.jsx')
var OpcodeHelp = require('./OpcodeHelp.jsx');

module.exports = React.createClass({
  displayName: 'CodeInput',

  PropTypes: {
    opcodes: React.PropTypes.object,
    registers: React.PropTypes.array,
    limitLines: React.PropTypes.number,
    locked: React.PropTypes.boolean,
    onChange: React.PropTypes.func,
  },

  getInitialState: function(){
    return {
    };
  },

  componentWillMount: function(){
    window.onresize = function(event) {
      this._getOuterBoxRef(this._outerBoxRef)
    }.bind(this);
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

  _handleChange: function(value){
    if(this.props.onChange){
      this.props.onChange(value);
    }
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

      help: {
        position: 'absolute',
        bottom: '5px',
        right: '5px',
      },
    };

    var help;

    if(!this.props.locked){
      help = (
        <div style={styles.help}>
          <OpcodeHelp
            opcodes={this.props.opcodes}
            registers={this.props.registers}
            limitLines={this.props.limitLines}
          />
        </div>
      );
    }

    return (
      <div style={styles.container}>
        <span style={styles.title}>
          Memoria de programa
        </span>
        <div
          style={styles.outerBox}
          ref={this._getOuterBoxRef}
          >

          <InputArea
            opcodes={this.props.opcodes}
            registers={this.props.registers}
            height={this.state.height}
            limitLines={this.props.limitLines}
            locked={this.props.locked}
            onChange={this._handleChange}
          />
        </div>
        {help}
      </div>
    );
  },
});
