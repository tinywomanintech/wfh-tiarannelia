import React from 'react';
import './HelpTips.scss';
import { imageSatu, imageDua, imageTiga, buttonOval, bottomLego } from '../assets/images/index.js';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function HelpTips() {
  return (
    <div className="helpntips">
      <section className="helpntips-section">
        <Container className="helpntips-container">
          <h1>Help & Tips</h1>
          <div className="helpntips-wrapper">
            <figure className="article-helpntips">
              <img src={imageSatu} alt="tips-1" />
              <div className="content">
                <figcaption>Start quickly with simple steps</figcaption>
                <span>
                  <Link to="/coming-soon">
                    <img src={buttonOval} alt="button" width="32" className="animate__animated " />
                  </Link>
                </span>
              </div>
            </figure>
            <figure className="article-helpntips">
              <img src={imageDua} alt="tips-2" />
              <div className="content">
                <figcaption>Run smoothly at vero eos et accusamus</figcaption>
                <span>
                  <Link to="/coming-soon">
                    <img src={buttonOval} alt="button" width="32" className="animate__animated " />
                  </Link>
                </span>
              </div>
            </figure>
            <figure className="article-helpntips">
              <img src={imageTiga} alt="tips-3" />
              <div className="content">
                <figcaption>Denounce with righteous indignation</figcaption>
                <span>
                  <Link to="/coming-soon">
                    <img src={buttonOval} alt="button" width="32" className="animate__animated " />
                  </Link>
                </span>
              </div>
            </figure>
          </div>
        </Container>

        <section className="quote-section">
          <div className="quote-wrapper">
            <div className="quote-text">
              <h1 className="animate__animated animate__infinite	infinite animate__fast	800ms">You're all set.</h1>
              <h3>The wise man there therefore always holds in these matters to this principle of selection</h3>
            </div>
            <div className="quote-image">
              <img src={bottomLego} alt="bitmap" />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
