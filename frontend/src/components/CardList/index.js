import React, { Component, Fragment } from 'react';

import { Container, Button } from 'reactstrap';

import CardItem from '../CardItem';

class CardList extends Component {
  render() {
    const { isLoading } = this.props;
    const cardListIsLoadingModificator = isLoading ? ' card-list--loading' : '';
    const btnIsLoadingModificator = isLoading ? ' card-list__btn-more-box--loading' : '';
    return (
      <Fragment>
        <Container className={`card-list${cardListIsLoadingModificator}`}>
          {this.renderCardItems()}
        </Container>
        <Container className={`card-list__btn-more-box${btnIsLoadingModificator}`}>
          <Button color="primary" onClick={this.props.onLoadGifts}>Показать ещё</Button>
        </Container>
      </Fragment>
    );
  }

  renderCardItems() {
    if (this.props.gifts) {
      return (this.props.gifts.map((gift, index) => 
        <CardItem
          key={gift._id}
          id={gift._id}
          index={index}
          name={gift.name}
          desciption={gift.desciption}
          composition={gift.composition}
          selectedPage={this.props.selectedPage}
        />
      ));
    } 
  };
};

export default CardList;