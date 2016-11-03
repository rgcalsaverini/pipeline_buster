var React = require('react');

module.exports = React.createClass({
  displayName: 'Button',

  PropTypes: {
    onClick: React.PropTypes.func,
  },

  getInitialState: function(){
    return {
      hover: false,
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
  },

  render: function(){
    var styles = {
      container: {
        padding: '8px',
        borderRadius: '6px',
        transition: 'all ease-in-out .2s',
        backgroundColor: this.state.hover ? 'rgba(255,255,255,.1)' : 'rgba(0,0,0,0)',
        fontFamily: "'Conv_mini_pixel-7'",
        fontSize: '28px',
        display: 'inline-block',
        color: 'rgba(255, 255, 255, .8)',
        cursor: 'pointer',
      },
    }
    return (
      <div
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
        onClick={this._handleClick}
        style={styles.container}
      >
        <span>{this.props.children}</span>
      </div>
    );
  },
});
