import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Element as ScrollElement } from 'react-scroll';

import CategoryItem from '../CategoryItem';
import CATEGORIES from '../../constants/categories';

class CategoryList extends Component {
  render() {
    const CATEGORIES_TITLE = 'Выберите свой уникальный подарок';
    return (
      <ScrollElement name="categories" className="categories">
        <Container>
          <h2>{CATEGORIES_TITLE}</h2>
        </Container>
        <Container id="category-list" className="category-list">
          {this.renderCategoriesItems()}
        </Container>
      </ScrollElement>
    );
  }

  renderCategoriesItems() {
    return(
      CATEGORIES.map(category => <CategoryItem 
        key={category.ID}
        categoryId={category.ID}
        name={category.NAME}
        description={category.DESCRIPTION}
      />)
    );
  }
};

export default CategoryList;