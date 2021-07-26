import React from 'react';
import './Hero.scss';
import { heroLego } from '../assets/images/index.js';
import { Container } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <Container className="hero-container">
        <div className="hero-wrapper">
          <h1>WEEKEND FROM HOME</h1>
          <h5>Stay active with a little workout.</h5>
          <div className="hero-image">
            <img src={heroLego} width="184" height="305" alt="bitmap" />
            <br />
            <Link smooth to="/#started" className="btn btn-started animate__animated animate__bounceInUp animate__slow	2s ">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Let's Go
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
