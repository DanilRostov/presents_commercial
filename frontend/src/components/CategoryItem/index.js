import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../constants/API';

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
    const { categoryId, name, description } = this.props;
    return (
      <Card className="category-item">
        <div className="category-item__img-box">
          <CardImg top width="100%" src={`${BASE_URL}/images/${categoryId}/1`}/>
        </div>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>{description}</CardText>
          <Link to={`/${categoryId}`}>
            <Button color="success">Перейти в каталог</Button>
          </Link>
        </CardBody>
      </Card>
    );
  }
};

export default CategoryItem;