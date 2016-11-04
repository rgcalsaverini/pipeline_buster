var React = require('react');

module.exports = React.createClass({
  displayName: 'Header',

  PropTypes: {
    status: React.PropTypes.string,
    archName: React.PropTypes.string,
  },

  getInitialState: function(){
    return {
    };
  },

  render: function(){
    var colors = {
      desligado: 'rgba(255, 255, 255, .2)',
      iniciando: '#efb645',
      rodando: '#45ef53',
      quebrado: '#ef4545',
    };

    var styles = {
      container:{
        fontSize: '60px',
        marginTop: '-5px',
      },

      status:{
        paddingLeft: '50px',
        color: colors[this.props.status],
      }
    };
    return (
      <div style={styles.container}>
        <span>{this.props.archName}</span>
        <span style={styles.status}>{this.props.status}</span>

      </div>
    );
  },
});
