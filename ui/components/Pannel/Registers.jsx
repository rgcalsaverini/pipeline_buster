var React = require('react');

module.exports = React.createClass({
  displayName: 'Registers',

  PropTypes: {
    registers: React.PropTypes.object,
  },

  getInitialState: function(){
    return {
    };
  },

  _renderRegisters: function(){
    var style = {
      display: 'inline-block',
      width: 'calc(50% - 10px)',
      padding: '5px',
      fontFamily: "'Conv_ponde___'",
      fontSize: '20px',
      // backgroundColor: 'rgba(255, 255, 0, .1)'
    }

    var regs = Object.keys(this.props.registers);
    var output = []

    for(var i = 0 ; i < regs.length ; i++){
        output.push(<div key={i} style={style}>{regs[i]}: {this.props.registers[regs[i]]}</div>);
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
