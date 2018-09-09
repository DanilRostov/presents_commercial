import React, { Component } from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import { Link as ScrollLink } from 'react-scroll';

class Promo extends Component {
  render() {
    return (
      <div>
        <Jumbotron expand="sm" className="promo">
          <Container>
            <h1 className="display-6">Заказ новогодних подарков в Сургуте</h1>
            <p className="lead">Закажите у нас новогодние подарки к 2019 году по выгодным ценам. Вы найдёте большой выбор разных вариантов для любых целей и коллективов.</p>
            <hr className="my-2" />
            <p>Изучите каталог с нашими подарками и позвоните нам. Ответим на любые вопросы.</p>
            <p className="lead">
              <ScrollLink to="categories" spy={true} smooth={true} duration={500} >
                <Button color="success">Изучить каталог</Button>
              </ScrollLink>
            </p>
          </Container>
         </Jumbotron>
       </div>
    );
  }
}

export default Promo;
