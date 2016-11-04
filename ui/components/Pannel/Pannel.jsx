var React = require('react');
var Header = require('./Header.jsx');
var Stack = require('./Stack');
var Registers = require('./Registers.jsx');
var Menu = require('./Menu.jsx');
var Message = require('./Message.jsx');


module.exports = React.createClass({
  displayName: 'Pannel',

  PropTypes: {
    data: React.PropTypes.object,
  },

  getInitialState: function(){
    return {
      innerHeight: null,
    };
  },

  componentWillMount: function(){
    window.onresize = function(event) {
      this._getStackRef()
    }.bind(this);
  },

  _getStackRef: function(ref){
    if(ref){
      this._stackRef = ref;
    }

    this.setState({innerHeight: this._stackRef.clientHeight});
  },

  render: function(){
    var machineData = this.props.data;

    if(!machineData){
      return (<span/>);
    }

    var styles = {
      container: {
        // backgroundColor: 'rgba(255, 0, 0, .1)',
        position: 'fixed',
        width: 'calc(66% - 30px)',
        height: 'calc(50% - 15px)',
        bottom: '15px',
        left: '15px',
        fontFamily: "'Conv_mini_pixel-7'",
        color: 'rgba(255, 255, 255, .8)',
      },

      header: {
        // backgroundColor: 'rgba(0, 255, 0, .1)',
        position: 'absolute',
        width: '100%',
        height: '50px',
        top: '0px',
        // borderBottom: '2px solid rgba(255, 255, 255, .2)',
      },

      stack:{
        // backgroundColor: 'rgba(255, 0, 0, .1)',
        position: 'absolute',
        width: 'calc(40% - 30px)',
        bottom: '50px',
        top: '50px',
      },

      registers: {
        // backgroundColor: 'rgba(255, 0, 255, .1)',
        position: 'absolute',
        width: 'calc(60% - 30px)',
        bottom: '50px',
        top: '50px',
        left: 'calc(40% - 30px)',
      },

      menu: {
        // backgroundColor: 'rgba(0, 0, 255, .1)',
        position: 'absolute',
        width: '60px',
        bottom: '50px',
        top: '50px',
        right: '0px',
      },

      message: {
        // backgroundColor: 'rgba(0, 255, 0, .1)',
        position: 'absolute',
        width: '100%',
        height: '50px',
        bottom: '0px',
        borderTop: '2px solid rgba(255, 255, 255, .2)',
      },
    };

    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <Header status={machineData.status} archName={machineData.name}/>
        </div>

        <div style={styles.stack} ref={this._getStackRef}>
          <Stack
            height={this.state.innerHeight}
            contents={machineData.stack.contents}
            limit={machineData.stack.limit}
          />
        </div>

        <div style={styles.registers}>
          <Registers cycle={machineData.cycle} registers={machineData.registers}/>
        </div>

        <div style={styles.menu}>
          <Menu/>
        </div>

        <div style={styles.message}>
          <Message error={machineData.messageError}>
            {machineData.message}
          </Message>
        </div>
      </div>
    );
  },
});
