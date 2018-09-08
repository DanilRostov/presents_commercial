import React, { Component } from 'react';
import { Container } from 'reactstrap';

import CardList from '../CardList';
import PAGE_TITLES from '../../constants/pageTitles';

class GiftsPage extends Component {
  render() {
    return (
      <div className="gifts-page">
        <Container>
          <h2 className="gifts-page__title">{this.getPageTitleValue()}</h2>
        </Container>
        <CardList 
          page={this.props.page}
        />
      </div>
    );
  }

  getPageTitleValue() {
    const DEFAULT_TITLE = 'Заголовок страницы';
    switch (this.props.page) {
      case PAGE_TITLES.TOYS.ID:
        return PAGE_TITLES.TOYS.TITLE;
      case PAGE_TITLES.BAGS.ID:
        return PAGE_TITLES.BAGS.TITLE;
      default:
        return DEFAULT_TITLE;
    }
  }
}

export default GiftsPage;