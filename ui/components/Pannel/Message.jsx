var React = require('react');

module.exports = React.createClass({
  displayName: 'Messages',

  PropTypes: {
    error: React.PropTypes.boolean,
  },

  render: function(){
    var styles = {
      container: {
        fontSize: '30px',
        paddingTop: '15px',
        color: this.props.error ? '#ef4545' : 'rgba(255, 255, 255, .4)',
      },
    }
    return (
      <div style={styles.container}>
        $> {this.props.children}
      </div>
    );
  },
});
