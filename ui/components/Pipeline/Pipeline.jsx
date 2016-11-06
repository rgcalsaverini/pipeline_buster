var React = require('react');
var BoxPipe = require('./BoxPipe');
var ALUPipe = require('./ALUPipe');
var InputPipe = require('./InputPipe');
var OutputPipe = require('./OutputPipe');

module.exports = React.createClass({
  displayName: 'Pipeline',

  PropTypes: {
    stages: React.PropTypes.array,
  },
  //
  // getInitialState: function(){
  //   return {
  //   };
  // },

  _renderStages: function(){
    var stages = [];
    var numStages = this.props.stages.length;


    for(var i = 0 ; i < this.props.stages.length ; i++){
      var stage = this.props.stages[i];
      if(stage.img == 'box'){
        stages.push(
          <BoxPipe key={i} name={stage.name} terminal={i == numStages - 1}/>
        );
      }

      if(stage.img == 'alu'){
        stages.push(
          <ALUPipe key={i} name={stage.name} terminal={i == numStages - 1}/>
        );
      }

      if(stage.img == 'input'){
        stages.push(
          <InputPipe key={i} name={stage.name} terminal={i == numStages - 1}/>
        );
      }

      if(stage.img == 'output'){
        stages.push(
          <OutputPipe key={i} name={stage.name} terminal={i == numStages - 1}/>
        );
      }
    }

    console.log(stages);

    return stages;
  },

  render: function(){
    if(!this.props || !this.props.stages)
      return(<span/>);

    var styles = {
      container: {
        // backgroundColor: 'rgba(255, 0, 0, .2)',
        width: 'calc(66vw - 30px)',
        height: 'calc(50% - 30px)',
        position: 'fixed',
        top: '15px',
        left: '15px',

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

    return (
      <div style={styles.container}>
        {this._renderStages()}
      </div>
    );
  },
});
