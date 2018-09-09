import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchStartGifts, fetchMoreGifts } from '../../actions/cardListAC';
import CardList from '../../components/CardList';

class CardListContainer extends Component {
  componentDidMount() {
    this.loadStartGifts();
  }

  loadStartGifts = () => {
    const { page } = this.props;
    const params = {
      giftsType: page,
      start: 0,
      limit: 8
    };
    this.props.fetchStartGifts(params);
  }

  loadMoreGifts = () => {
    const { page, loadedGifts } = this.props;
    const params = {
      giftsType: page,
      start: loadedGifts.length,
      limit: 8
    };
    this.props.fetchMoreGifts(params);
  }

  render() {
    return (
      <CardList 
        gifts={this.props.loadedGifts}
        onLoadGifts={this.loadMoreGifts}
        isLoading={this.props.isLoading}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.cardList.isLoading,
    loadedGifts: state.cardList.loadedGifts,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStartGifts: (params) => dispatch(fetchStartGifts(params)),
    fetchMoreGifts: (params) => dispatch(fetchMoreGifts(params))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardListContainer));