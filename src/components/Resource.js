import React from 'react';
import './Resources.scss';
import { Container } from 'react-bootstrap';

export default function Resource() {
  return (
    <section className="resource-section">
      <Container className="resource-container">
        <article className="article-resource">
          <h1>POV</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.{' '}
          </p>
        </article>
        <article className="article-resource">
          <h1>Resource</h1>
          <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best</p>
        </article>
      </Container>
    </section>
  );
}
