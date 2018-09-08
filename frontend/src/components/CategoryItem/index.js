import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap';

class CategoryItem extends Component {
  render() {
    return (
      <Card className="category-item">
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Category image cap"/>
        <CardBody>
          <CardTitle>{this.props.name}</CardTitle>
          <CardText>{this.props.description}</CardText>
          <Link to={`/${this.props.link}`}>
            <Button color="primary">Перейти в каталог</Button>
          </Link>
        </CardBody>
      </Card>
    );
  }
};

export default CategoryItem;