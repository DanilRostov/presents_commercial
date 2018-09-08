import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Container
} from 'reactstrap';

class Header extends Component {
  state = {
    isOpen: false,
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Navbar color="dark" dark expand="sm" className="footer">
        <Container>
          <NavbarBrand href="/">подарки-сургут.рф</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <ul className="navigation">
              <li>
                <Link to="/toys" className="navigation__link">Игрушки</Link>
              </li>
              <li>
                <Link to="/bags" className="navigation__link">Мешочки</Link>
              </li>
            </ul>
            <a className="navigation__phone" href="tel:+79224240580">+7 (922) 424-05-80</a>
          </Collapse>
        </Container>
        <Container className="footer__copyright-box">
          <span className="footer__copyright-text">Copyright © все права защищены, 2018.</span>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
