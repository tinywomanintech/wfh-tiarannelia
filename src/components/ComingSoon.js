import React from 'react';
import './ComingSoon.scss';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default function ComingSoon() {
  return (
    <section>
      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '1440px', height: '100%' }}>
        <div className="d-flex align-items-center text-center error-page  pt-5 pb-4 h-100">
          <div className="row flex-grow">
            <div className="col-lg-8 mx-auto text-dark">
              <div className="row align-items-center ">
                <div>
                  <h2>Coming soon!</h2>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-12 text-center mt-xl-2">
                  <Link to="/" className="text-dark font-weight-medium">
                    Back to home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
