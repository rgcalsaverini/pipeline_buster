var React = require('react');
var PxButton = require('./PxButton.jsx');


module.exports = React.createClass({
  displayName: 'Opening',
  //
  // PropTypes: {
  //   prop: React.PropTypes.,
  // },

  getInitialState: function(){
    return {
      version: 'a',
    };
  },

  componentDidMount: function(){
    this._interval = window.setInterval(function(){
      this.setState({version: this.state.version == 'a'? 'b' : 'a'});
    }.bind(this), 1000);
  },

  componentWillUnmount: function(){
    window.clearInterval(this._interval);
  },

  render: function(){
    var styles = {
      container: {

      },

      img:{
        position: 'fixed',
        height: '65vh',
        top: '10vh',
        left: '3vw',
      },

      text: {
        position: 'fixed',
        bottom: '3vh',
        left: '3vw',
        fontFamily: "'Conv_mini_pixel-7'",
        fontSize: '55px',
        color: 'rgba(0, 0,  0, .5)',
      },

      usp: {
        position: 'fixed',
        height: '11vh',
        bottom: '4vh',
        right: '3vw',
      },

    };
    return (
      <div style={styles.container}>
        <img style={styles.img} src={"/static/imgs/open_" + this.state.version +".svg"}/>
        <img style={styles.usp} src="/static/imgs/usp.svg"/>
        <div style={styles.text}>
          Um jogo de pipelines, assembly e vandalismo por Rui Calsaverini<br/>
          SSC0114 - Arquitetura de Computadores
        </div>
        <div style={{position: 'fixed', left:'40vw', top: '30vh'}}><PxButton text='Stack' missionID='0'/></div>
        <div style={{position: 'fixed', left:'60vw', top: '30vh'}}><PxButton text='Heap' missionID='1'/></div>
        <div style={{position: 'fixed', left:'80vw', top: '30vh'}}><PxButton text='Control' missionID='2'/></div>
      </div>
    );
  },
});
