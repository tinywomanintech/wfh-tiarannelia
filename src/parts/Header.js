import React from 'react';
import { logo } from '../assets/images/index.js';
import { Container, Navbar } from 'react-bootstrap';

import './Header.scss';

export default function Header() {
  return (
    <header>
      <Navbar expand="lg" variant="white" bg="white">
        <Container className="navbar-container">
          <Navbar.Brand href="#">
            <img src={logo} width="33" height="33" alt="bitmap-logo" />
          </Navbar.Brand>
          <Navbar.Text className="me-auto" style={{ width: '6rem', fontSize: '12px' }}>
            Good Morning <b style={{ fontSize: '1rem' }}> Fellas</b>
          </Navbar.Text>
        </Container>
      </Navbar>
    </header>
  );
}
