import React from 'react';
import './ComingSoon.scss';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { heroLego } from '../assets/images/index.js';

export default function ComingSoon() {
  return (
    <section className="comingsoon-section">
      <Container className="comingsoon-container">
        <div className="comingsoon-content">
          <img src={heroLego} width="184" height="305" alt="bitmap" />
          <h1>Coming Soon!</h1>
          <Link to="/" className="text-dark font-weight-medium">
            Back to home
          </Link>
        </div>
      </Container>
    </section>
  );
}
