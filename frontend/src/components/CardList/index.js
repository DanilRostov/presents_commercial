import React, { Component, Fragment } from 'react';

import { Container, Button } from 'reactstrap';

import CardItem from '../CardItem';

class CardList extends Component {
  render() {
    return (
      <Fragment>
        <Container className="card-list">
          {this.renderCardItems()}
        </Container>
        <Container className="card-list__btn-more-box">
          <Button color="primary" onClick={this.props.onLoadGifts}>Показать ещё</Button>
        </Container>
      </Fragment>
    );
  }

  renderCardItems() {
    if (this.props.gifts) {
      return (this.props.gifts.map(gift => 
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

export default CardList;