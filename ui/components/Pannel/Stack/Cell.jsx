var React = require('react');

module.exports = React.createClass({
  displayName: 'Cell',

  PropTypes: {
    first: React.PropTypes.boolean,
  },

  // getInitialState: function(){
  //   return {
  //   };
  // },

  render: function(){
    var styles={
      container: {
        border: '2px dashed rgba(0,0,0,.2)',
        marginLeft: '10px',
        marginRight: '10px',
        width: 'calc(100% - 35px)',
        height: '25px',
        lineHeight: '25px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        fontFamily: "'Conv_ponde___'",
        fontSize: '20px',
        padding: '5px',
        textAlign: 'center',
      },

      left: {
        width: '4px',
        height: '35px',
        position: 'absolute',
        left: '10px',
        backgroundColor: 'rgba(255, 255, 255, .8)',
        marginTop: '-5px',
      },

      right: {
        width: '4px',
        height: '35px',
        position: 'absolute',
        right: '10px',
        backgroundColor: 'rgba(255, 255, 255, .8)',
        marginTop: '-5px',
      },

      top: {
        right: '15px',
        backgroundColor: 'rgba(255, 255, 255, .8)',
        position: 'absolute',
        left: '15px',
        height: '4px',
        marginTop: '-9px',
      },

      bottom: {
        right: '15px',
        backgroundColor: 'rgba(255, 255, 255, .8)',
        position: 'absolute',
        left: '15px',
        height: '4px',
        marginTop: '31px',
      },

      contents:{
        // position: 'absolute',
      }
    };

    var bottom;

    if(this.props.first){
      bottom = (<div style={styles.bottom}/>);
    }

    return (
      <div style={styles.container}>
        <div style={styles.left}/>
        <div style={styles.right}/>
        <div style={styles.top}/>
        {bottom}
        <div style={styles.contents}>{this.props.children}</div>
      </div>
    );
  },
});
