var React = require('react');

module.exports = React.createClass({
  displayName: 'PxButton',

  PropTypes: {
    text: React.PropTypes.string,
    missionID: React.PropTypes.string,
  },

  getInitialState: function(){
    return {
      hover: false,
    };
  },

  _handleMouseEnter: function(){
    this.setState({hover: true});
  },

  _handleMouseLeave: function(){
    this.setState({hover: false});
  },

  _handleClick: function() {
    document.location.href= '/play/'+this.props.missionID;
  },

  render: function(){
    var styles = {
      container: {
        display: 'inline-block',
        cursor: 'pointer',
      },

      img: {
        position: 'relative',
        width: this.state.hover ? '14.5vw' : '14vw',
        top: this.state.hover ? '-0.20vw' : '0vw',
      },

      text:{
        fontFamily: "'Conv_mini_pixel-7'",
        fontSize: '56px',
        color: '#21252B',
        position: 'absolute',
        // backgroundColor: 'rgba(255, 0, 0, .9)',
        top: 'calc(50% - 28px)',
        marginTop: this.state.hover ? '-0.20vw' : '0vw',
        width: '100%',
        textAlign: 'center',
      }
    };

    return (
      <div
        style={styles.container}
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
        onClick={this._handleClick}
      >
        <img style={styles.img} src={'/static/imgs/pxbtn' + (this.state.hover ? '_raised.svg' : '.svg')}/>
        <div style={styles.text}>{this.props.text}</div>
      </div>
    );
  },
});
