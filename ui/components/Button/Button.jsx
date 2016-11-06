var React = require('react');
var merge = require('../../utils/merge.js');



module.exports = React.createClass({
  displayName: 'Button',

  PropTypes: {
    onClick: React.PropTypes.func,
    rounded: React.PropTypes.boolean,
    style: React.PropTypes.object,
  },

  getInitialState: function(){
    return {
      hover: false,
      sound: false,
    };
  },

  _handleMouseEnter: function() {
    this.setState({hover: true});
  },

  _handleMouseLeave: function() {
    this.setState({hover: false});
  },

  _handleClick: function(){
    if(this.props.onClick){
      this.props.onClick();
    }
    this.setState({sound: true});
    window.setTimeout(function(){
      this.setState({sound: false});
    }.bind(this), 1000);
  },

  render: function(){
    var styles = {
      container: {
        padding: '8px',
        borderRadius: this.props.rounded ? '100%' : '6px',
        transition: 'all ease-in-out .2s',
        backgroundColor: this.state.hover ? 'rgba(255,255,255,.1)' : 'rgba(0,0,0,0)',
        fontFamily: "'Conv_mini_pixel-7'",
        fontSize: '28px',
        display: 'inline-block',
        color: 'rgba(255, 255, 255, .8)',
        cursor: 'pointer',
      },
    }

    var sound;

    if(this.state.sound){
      sound = (
        <audio autoPlay>
          <source src="/static/sounds/button.wav" type="audio/wav"/>
        </audio>
      );
    }

    return (
      <div
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
        onClick={this._handleClick}
        style={merge(styles.container, this.props.style)}
      >
        {sound}
        <span>{this.props.children}</span>
      </div>
    );
  },
});
