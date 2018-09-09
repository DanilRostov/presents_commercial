import React, { Component } from 'react';

import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CardListContainer from '../../containers/CardListContainer';
import PAGE_TITLES from '../../constants/pageTitles';
import Spinner from '../Spinner';

class GiftsPage extends Component {
  render() {
    return (
      <div className="gifts-page">
        <Container>
          <h2 className="gifts-page__title">{this.getPageTitleValue()}</h2>
        </Container>
        <CardListContainer 
          page={this.props.page}
        />
        <Spinner
          isVisible={this.props.cardList.isLoading}
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

const mapStateToProps = (state) => {
  return {
    cardList: state.cardList,
  }
};

export default withRouter(connect(mapStateToProps, null)(GiftsPage));