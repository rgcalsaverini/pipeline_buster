var React = require('react');

module.exports = React.createClass({
  displayName: 'Hello',

  PropTypes: {
    prop: React.PropTypes.,
  },

  getInitialState: function(){
    return {
    };
  },

  render: function(){
    return (<div>Hello React</div>);
  },
});
