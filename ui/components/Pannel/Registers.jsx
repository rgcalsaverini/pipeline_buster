var React = require('react');
var merge = require('../../utils/merge.js');

module.exports = React.createClass({
  displayName: 'Registers',

  PropTypes: {
    registers: React.PropTypes.object,
  },

  componentWillReceiveProps: function(newProps){
    if(!newProps || !newProps.registers || !this.props || !this.props.registers){
      return;
    }
    var justChanged = [];

    var newKeys = Object.keys(newProps.registers);

    for(var i = 0 ; i < newKeys.length ; i++){
      var newReg = String(newProps.registers[newKeys[i]]).trim();
      var oldReg = String(this.props.registers[newKeys[i]]).trim();

      if(!oldReg || oldReg != newReg) {
        justChanged.push(newKeys[i]);
      }
    }

    this.setState({justChanged: justChanged});

    window.setTimeout(function(){
      this.setState({justChanged: []});
    }.bind(this), 200)

  },

  getInitialState: function(){
    return {
      justChanged: [],
    };
  },

  _renderRegisters: function(){
    var baseStyle = {
      display: 'inline-block',
      width: 'calc(50% - 10px)',
      padding: '5px',
      fontFamily: "'Conv_ponde___'",
      fontSize: '20px',
      transition: 'all ease-in-out 200ms',
      borderRadius: '4px',
    }

    var regs = Object.keys(this.props.registers);
    var output = []

    for(var i = 0 ; i < regs.length ; i++){
      if(regs[i][0] != '_'){
        var justChanged = this.state.justChanged.indexOf(regs[i]) != -1;
        var style = merge(baseStyle, justChanged && {backgroundColor: 'rgba(255, 255, 255, .2)'});
        output.push(<div key={i} style={style}>{regs[i]}: {String(this.props.registers[regs[i]])}</div>);
      }
    }
    return output;
  },

  render: function(){
    if(!this.props.registers){
      return (<span/>);
    }

    return (
      <div>
        {this._renderRegisters()}
      </div>
    );
  },
});
