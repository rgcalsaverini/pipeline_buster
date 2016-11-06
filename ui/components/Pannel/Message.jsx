var React = require('react');

module.exports = React.createClass({
  displayName: 'Messages',

  PropTypes: {
    error: React.PropTypes.boolean,
  },

  getInitialState: function(){
    return {
      sound: false,
    };
  },

  componentWillReceiveProps: function(newProps){
    if(!this.props.error && newProps.error){
      this.setState({sound: true});

      window.setTimeout(function(){
        this.setState({sound: false});
      }.bind(this), 1000);
    }
  },

  render: function(){
    var styles = {
      container: {
        fontSize: '30px',
        paddingTop: '15px',
        color: this.props.error ? '#ef4545' : 'rgba(255, 255, 255, .4)',
      },
    }

    var sound;

    if(this.state.sound){
      sound = (
        <audio autoPlay>
          <source src="/static/sounds/error.wav" type="audio/wav"/>
        </audio>
      );
    }

    return (
      <div style={styles.container}>
        {sound}
        $> {this.props.children}
      </div>
    );
  },
});
