var React = require('react');
var Cell = require('./Cell.jsx');


module.exports = React.createClass({
  displayName: 'Stack',

  PropTypes: {
    contents: React.PropTypes.array,
    limit: React.PropTypes.number,
    height: React.PropTypes.number,
  },

  _renderCells: function(){
    if(this.props.contents.length == 0){
      return (
        <div
          style={{
            position: 'relative',
            textAlign: 'center',
            paddingTop: 'calc(25% - 20px)',
            fontSize: '40px',
            width: '100%',
          }}
        >
          Stack vazio
        </div>);
    }

    var limit = ((this.props.height - 55)/39)|0;
    var numCells = this.props.contents.length;
    var topPadding = String(Math.max(0, this.props.height - numCells * 39 - 35)) + 'px';
    var cells = [<span style={{paddingTop: topPadding}}/>];

    for(var i = numCells-1; i >= 0; i--){
      if(numCells > limit && numCells - i > limit){
        break;
      }

      var content = this.props.contents[i];
      cells.push(
        <Cell key={i} first={i==0 && limit >= numCells}>
          {content}
        </Cell>
      );
    }

    return cells;
  },

  render: function(){
    if(!this.props.height){
      return (<span/>);
    }

    console.log(this.state? this.state.innerHeight: 'wait');

    var styles = {
      container: {
        // backgroundColor: 'rgba(0, 255, 0, .1)',
        boxSizing: 'border-box',
        paddingTop: '20px',
        height: '100%',
        overflow: 'hidden',
      },

      cellsContainer:{
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'flex-end',
      },

    };
    return (
      <div style={styles.container}>
        <div style={styles.cellsContainer}>
          {this._renderCells()}
        </div>
      </div>
    );
  },
});
