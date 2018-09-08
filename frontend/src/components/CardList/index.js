import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { fetchGifts } from '../../actions/cardListAC';

import { Container, Button } from 'reactstrap';
import CardItem from '../CardItem';

class CardList extends Component {
  componentDidMount() {
    this.loadGifts();
  }

  render() {
    return (
      <Fragment>
        <Container className="card-list">
          {this.renderCardItems()}
          <Button color="primary" onClick={this.loadGifts}>Показать ещё</Button>
        </Container>
      </Fragment>
    );
  }

  loadGifts = () => {
    console.log(this.props.loadedGifts);
    const params = {
      giftsType: this.props.page,
      start: isEmpty(this.props.loadedGifts) ? 0 : this.props.loadedGifts.length,
      limit: 5
    };
    this.props.fetchGifts(params);
  }

  renderCardItems() {
    if (this.props.loadedGifts.length !== 0) {
      return (this.props.loadedGifts.map(gift => 
        <CardItem
          key={gift._id}
          id={gift._id}
          name={gift.name}
          desciption={gift.desciption}
          composition={gift.composition}
        />
      ));
    } 
  };
};

const mapStateToProps = (state) => {
  return {
    loadedGifts: state.cardList.loadedGifts,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGifts: (params) => dispatch(fetchGifts(params))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardList));