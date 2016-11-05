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
        // borderBottom: '2px dashed rgba(255, 255, 255, .8)',
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
        height: '31px',
        position: 'absolute',
        left: '10px',
        backgroundColor: 'rgba(255, 255, 255, .8)',
        marginTop: '-5px',
      },

      right: {
        width: '4px',
        height: '31px',
        position: 'absolute',
        right: '10px',
        backgroundColor: 'rgba(255, 255, 255, .8)',
        marginTop: '-5px',
      },

      top: {
        right: '14px',
        backgroundColor: 'rgba(255, 255, 255, .8)',
        position: 'absolute',
        left: '14px',
        height: '4px',
        marginTop: '-9px',
      },

      bottom: {
        right: '14px',
        backgroundColor: 'rgba(255, 255, 255, .8)',
        position: 'absolute',
        left: '14px',
        height: '4px',
        marginTop: '25px',
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
        <div key={1} style={styles.left}/>
        <div key={2} style={styles.right}/>
        <div key={3} style={styles.top}/>
        <span key={4}>{bottom}</span>
        <div key={5} style={styles.contents}>{this.props.children}</div>
      </div>
    );
  },
});
