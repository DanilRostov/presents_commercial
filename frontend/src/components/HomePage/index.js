import React, { Component, Fragment } from 'react';

import Promo from '../Promo';
import CategoryList from '../CategoryList';

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Promo />
        <CategoryList page={this.props.page}/>
      </Fragment>
    );
  }
}

export default HomePage;