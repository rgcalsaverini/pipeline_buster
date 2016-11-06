var React = require('react');
var BoxPipeIcon = require('./BoxPipeIcon.jsx');
var BoxPipeIconArrow = require('./BoxPipeIconArrow.jsx');


module.exports = React.createClass({
  displayName: 'BoxPipe',

  PropTypes: {
    terminal: React.PropTypes.boolean,
    name: React.PropTypes.string,
  },

  _height: '76%',
  _margin: '8.0%',

  render: function(){
    var styles = {
      container: {
        display: 'inline-block',
        height: this._height,
        paddingTop: this._margin,
        paddingLeft: '3px',
        paddingRight: '3px',
        // paddingTop: '0px',
      },

      icon: {
        height: this._height,
        // border: '1px solid black',
        // fill:
      },

      name: {
        position: 'absolute',
        width: '122px',
        textAlign: 'center',
        fontFamily: "'Conv_mini_pixel-7'",
        fontSize: '32px',
        // backgroundColor: 'rgba(255, 0, 0, .2)',
        top: 'calc(50% - 10px)',
        // paddingTop: 'calc(' + this._height + ' / 2 - 28px / 2)',
      },
    };

    var icon =(<BoxPipeIconArrow style={styles.icon}/>);

    if(this.props.terminal){
      icon = (<BoxPipeIcon style={styles.icon}/>);
    }

    return (
      <div style={styles.container}>
        {icon}
        <div style={styles.name}>{this.props.name}</div>
      </div>
    );
  },
});
