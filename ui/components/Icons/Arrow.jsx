var React = require('react');

var Arrow = function (props) {
  return (
    <svg {...props} viewBox="0 0 900 900" /*xmlns="http://www.w3.org/2000/svg"*/>
      <path d="M200.00056.000001v899.999994h99.99978v-99.99978h99.99977v-99.99978h99.99977v-100.00178h99.99978v-99.99978h99.99978v-99.99978h-99.99978v-99.99977h-99.99978v-99.99977h-99.99977v-99.99978h-99.99977V.000001h-99.99978z"/>
    </svg>
  );
};

Arrow.displayName = 'Arrow';

module.exports = Arrow;
