import React, { Component } from 'react';
import uuid from 'uuid';
import { BASE_URL } from '../../constants/API';

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Popover, 
  PopoverHeader, 
  PopoverBody,
  ListGroup, 
  ListGroupItem
} from 'reactstrap';

class CardItem extends Component {
  state = {
    popoverOpen: false
  }

  toggle = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    const { id, name, desciption, composition, index, selectedPage } = this.props;
    return (
      <Card className="card-item">
        <CardImg className="card-item__img" top width="100%" src={`${BASE_URL}/images/${selectedPage}/${index}`} alt="Card image cap" />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>{desciption}</CardText>
          <Button id={`Popover-${id}`} onClick={this.toggle} color="primary">Показать состав</Button>
        </CardBody>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target={`Popover-${id}`} toggle={this.toggle}>
          <PopoverHeader>Состав подарка "{name}"</PopoverHeader>
          <PopoverBody>
            <ListGroup>
              {composition.map(item => <ListGroupItem key={uuid()}>{item.title}: {item.amount} ед.</ListGroupItem>)}
            </ListGroup>
          </PopoverBody>
        </Popover>
      </Card>
    );
  }
};

export default CardItem;
