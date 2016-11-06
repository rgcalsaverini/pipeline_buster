var React = require('react');
var Mission = require('./Mission.jsx');
var Conclusion = require('./Conclusion.jsx');

module.exports = React.createClass({
  displayName: 'Announcment',

  PropTypes: {
    hide: React.PropTypes.boolean,
    title: React.PropTypes.string,
    destroyed: React.PropTypes.boolean,
    onClick: React.PropTypes.func,
  },

  getInitialState: function(){
    return {
      display: 'flex',
    };
  },

  componentWillReceiveProps: function(newProps){
    if(!this.props.hide && newProps.hide){
      window.setTimeout(function(){
        this.setState({display: 'none'});
      }.bind(this), 250);
    }
    else if(this.props.hide && !newProps.hide){
      this.setState({display: 'flex'});
    }
  },

  _handleClick: function() {
    if(this.props.onClick){
      this.props.onClick();
    }
  },

  render: function(){
    var styles = {
      container: {
        position: 'fixed',
        backgroundColor: '#21252B',
        zIndex: '99',
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px',
        transition: 'opacity ease-in-out 200ms',
        opacity: this.props.hide ? '0' : '1',
        display: '-webkit-flex',
        display: this.state.display,
        WebkitFlexDirection: 'row',
        flexDirection: 'row',
        WebkitAlignItems: 'center',
        alignItems: 'center',
        WebkitJustifyContent: 'center',
        justifyContent: 'center',
      },

      mission: {
        marginTop: '5vh',
        height: '90vh',
        position: 'absolute',
        top: '0px',
        bottom: '0px',
        zIndex: '100',
      },

      title: {
        position: 'absolute',
        fontFamily: "'Conv_mini_pixel-7'",
        fontSize: '100px',
        top: '10vh',
        left: '37vw',
        // backgroundColor: 'rgba(255, 255, 0, .2)',
        width: '45vw',
        textAlign: 'center',
      },

      text: {
        position: 'absolute',
        fontFamily: "'Conv_ponde___'",
        fontSize: '25px',
        top: '25vh',
        left: '18vw',
        color: 'rgba(255, 255, 255, .8)',
        // backgroundColor: 'rgba(255, 255, 0, .2)',
        width: '65vw',
        height: '66vh',
        textAlign: 'center',
        display: '-webkit-flex',
        display: 'flex',
        WebkitFlexDirection: 'row',
        flexDirection: 'row',
        WebkitAlignItems: 'center',
        alignItems: 'center',
        WebkitJustifyContent: 'center',
        justifyContent: 'center',
      },
    };

    var sound;

    if(this.props.destroyed){
      sound = (
        <audio autoPlay>
          <source src="/static/sounds/won.wav" type="audio/wav"/>
        </audio>
      );
    }


    var board = (<Mission style={styles.mission}/>);

    if(this.props.destroyed){
      board = (<Conclusion style={styles.mission}/>);
    }

    return (
      <div style={styles.container} onClick={this._handleClick}>
        {board}
        {sound}
        <div style={styles.text}>
          <p dangerouslySetInnerHTML={{__html: this.props.children}} />
        </div>
        <div style={styles.title}>
          {this.props.title}
        </div>
      </div>
    );
  },
});
