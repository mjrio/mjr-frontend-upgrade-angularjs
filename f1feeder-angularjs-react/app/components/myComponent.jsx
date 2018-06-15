import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/prop-types, react/prefer-stateless-function */
export default class MyComponent extends Component {
  render() {
    return (
      <div>
        <p>FooBar: {this.props.fooBar}</p>
        <p>Baz: {this.props.baz}</p>
      </div>
    );
  }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html
MyComponent.propTypes = {
  fooBar: PropTypes.number.isRequired,
  baz: PropTypes.string.isRequired,
};
