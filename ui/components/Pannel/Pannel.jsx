var React = require('react');

module.exports = React.createClass({
  displayName: 'OpcodeHelp',
  //
  // PropTypes: {
  //   prop: React.PropTypes.,
  // },

  getInitialState: function(){
    return {
    };
  },

  render: function(){
    var styles = {
      container: {
        backgroundColor: 'rgba(255, 0, 0, .1)',
        position: 'fixed',
        width: 'calc(66% - 30px)',
        height: 'calc(50% - 15px)',
        bottom: '15px',
        left: '15px',
      },

      header: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 255, 0, .1)',
        width: '100%',
        height: '50px',
        top: '0px',
      },

      stack:{
        position: 'absolute',
        backgroundColor: 'rgba(255, 0, 0, .1)',
        width: '35%',
        bottom: '50px',
        top: '50px',
      },

      message: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 255, 0, .1)',
        width: '100%',
        height: '50px',
        bottom: '0px',
      },

      menu: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 255, .1)',
        width: '15%',
        bottom: '50px',
        top: '50px',
        right: '0px',
      },

      registers: {
        position: 'absolute',
        backgroundColor: 'rgba(255, 0, 255, .1)',
        width: '50%',
        bottom: '50px',
        top: '50px',
        left: '35%',
      },
    };
    return (
      <div style={styles.container}>
        <div style={styles.header}>
        </div>

        <div style={styles.stack}>
        </div>

        <div style={styles.registers}>
        </div>

        <div style={styles.menu}>
        </div>

        <div style={styles.message}>
        </div>
      </div>
    );
  },
});
