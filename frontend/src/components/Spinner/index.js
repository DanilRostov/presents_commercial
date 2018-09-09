import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from './spinner.svg';

export default class LoadingIndicator extends Component {
  static propTypes = {
    isVisible: PropTypes.bool
  };

  render() {
    return (
      <div>
        {this.props.isVisible ? this.renderSpinner() : null}
      </div>
    );
  }

  renderSpinner() {
    return (
      <div className='spinner'>
        <img src={Spinner} alt='Loading...' />
      </div>
    );
  }
}