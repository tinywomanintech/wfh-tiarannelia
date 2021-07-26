import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container } from 'react-bootstrap';
import './Footer.scss';

export default function Footer() {
  return (
    <footer>
      <Container className="footer-container">
        <div className="footer-section">
          <Link smooth to="/#hero" style={{ textDecoration: 'none' }}>
            <p>
              <b>wknd</b>@2020
            </p>
          </Link>

          <button className="btn-version">alpha version 0.1</button>
        </div>
      </Container>
    </footer>
  );
}
