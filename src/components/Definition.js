import React from 'react';
import './Definition.scss';
import { rightLego } from '../assets/images/index.js';
import { Container } from 'react-bootstrap';

export default function Definition() {
  return (
    <section id="started" className="main-section">
      <div className="main-image">
        <img src={rightLego} alt="right-lego" width="160" />
        <Container className="main-container">
          <main className="main main-wrapper">
            <blockquote>
              <strong
                style={{
                  color: '#0b24fb',
                }}
              >
                Deffinition;
              </strong>
              &nbsp; a practice or exercise to test or improve one's fitness for athletic competition, ability, or performance to exhaust (something, such as a mine) by working to devise, arrange, or achieve by resolving difficulties.
              Merriam-Webster.com Dictionary.
            </blockquote>
            <h5> -weekend team</h5>
          </main>
        </Container>
      </div>
    </section>
  );
}
