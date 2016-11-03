var React = require('react');

module.exports = React.createClass({
  displayName: 'Caret',

  PropTypes: {
    char: React.PropTypes.number,
    lineHeight: React.PropTypes.number,
  },

  getInitialState: function(){
    return {
      show: true,
    };
  },

  componentWillMount: function(){
    this._interval = window.setInterval(this._blink, 700);
  },

  componentWillUnmount: function(){
    window.clearInterval(this._interval);
  },

  _blink: function(){
    this.setState({show: !this.state.show});
  },

  render: function(){
    var style = {
      width: '16px',
      height: '20px',
      backgroundColor: 'rgba(255, 255, 255, .8)',
      opacity: this.state.show ? '1' : '0',
      position: 'absolute',
      marginTop: '-' + String(this.props.lineHeight)+'px',
      // left: String(30 + this.props.char * 10) + 'px',
      left: String(34 + this.props.char * 16.3) + 'px',
    }
    return (<div style={style}/>);
  },
});
