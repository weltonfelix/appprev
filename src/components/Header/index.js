import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import logo from '../../assets/images/logo.png';

function Header() {
  return (
    <Navbar variant="dark">
      <Navbar.Brand href="/">
        <img src={logo} className="d-inline-block align-top" alt="AppPrev" />
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">PARA EMPRESAS</Nav.Link>
          <Nav.Link href="/">COMO FUNCIONA?</Nav.Link>
          <Nav.Link href="/">SOBRE NÓS</Nav.Link>
          <Nav.Link href="mailto:contato.weltonf@gmail.com">CONTATO</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
