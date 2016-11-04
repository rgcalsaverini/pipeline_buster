var React = require('react');
var Button = require('../Button');
var ArrowIcon = require('../Icons').Arrow;


module.exports = React.createClass({
  displayName: 'Menu',
  //
  // PropTypes: {
  //   prop: React.PropTypes.,
  // },

  getInitialState: function(){
    return {
      running: false,
    };
  },

  _handleStop: function(){
    this.setState({running: false});
  },

  _handlePlay: function(){
    this.setState({running: true});
  },

  _playToggle: function(){
    if(!this.state.running){
      window.components.runMachine(this._handlePlay, this._handleStop);
    } else {
      window.components.stopMachine();
    }

  },

  render: function(){
    var styles = {
      arrowButton:{
        // width: '44px',
        height: '44px',
        fill: 'rgba(255, 255, 255, .8)',
      },

      stop: {
        width: '30px',
        height: '30px',
        margin: '7px',
        marginTop: '10px',
        marginBottom: '11px',
        backgroundColor: 'rgba(255, 255, 255, .8)',
      },

      textButton: {
        width: '44px',
        textAlign: 'center',
        fontSize: '55px',
        display: 'inline-block',
      },

      clockSpeed:{
        marginTop: this.state.running ? '11px' : '15px',
        fontFamily: "'Conv_ponde___'",
        fontSize: '14px',
        textAlign: 'center',
      },
    };

    var icon;

    if(!this.state.running){
      icon = (<ArrowIcon style={styles.arrowButton}/>);
    }else{
      icon = (<div style={styles.stop}/>);
    }

    return (
      <div>
        <Button onClick={this._playToggle}>{icon}</Button>
        <div style={styles.clockSpeed}>Clock Speed:</div>
        <Button onClick={window.components.speedUpCycle}><span style={styles.textButton}>+</span></Button>
        <Button onClick={window.components.slowDownCycle}><span style={styles.textButton}>-</span></Button>
      </div>
    );
  },
});
