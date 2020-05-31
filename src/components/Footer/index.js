import React from 'react';
import { Navbar } from 'react-bootstrap';

import logo from '../../assets/images/logo.png';

import './styles.css';

function Footer() {
  return (
    <Navbar id="footer" variant="dark">
      <Navbar.Brand>
        <img src={logo} className="d-inline-block align-top" alt="AppPrev" />
      </Navbar.Brand>
    </Navbar>
  );
}

export default Footer;
