var React = require('react');
var BoxPipeIcon = require('./BoxPipeIcon.jsx');
var BoxPipeIconArrow = require('./BoxPipeIconArrow.jsx');


module.exports = React.createClass({
  displayName: 'BoxPipe',

  PropTypes: {
    terminal: React.PropTypes.boolean,
    name: React.PropTypes.string,
  },

  _height: '80%',
  _margin: '6.5%',

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
        // width: '100%',
        fontFamily: "'Conv_mini_pixel-7'",
        fontSize: '28px',
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
