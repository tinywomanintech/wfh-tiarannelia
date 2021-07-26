import React from 'react';
import './Slider.scss';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/core';
import 'swiper/swiper.min.css';

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export default function Slider() {
  return (
    <section className="slide-section">
      <div className="oval"></div>
      <Container className="slide-text">
        <h1>Testimonial</h1>
      </Container>
      <section className="slider">
        <Container className="slider-container">
          <Swiper cssMode={true} navigation={true} pagination={false} mousewheel={true} keyboard={true} className="mySwiper" slidesPerView="2.5">
            <SwiperSlide>
              <div className="slider-text">
                <h1>Blu Kicks</h1>
                <p> Places where you can leverage tools and software to free up time to focus on growing the business.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-text">
                <h1>Angelus</h1>
                <p> All those apps took me months to get running. Now the site practically runs itself!</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-text">
                <h1>SoYoung</h1>
                <p> Unless you have a truly unique product, it will be very hard to differentiate and gain brand traction</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-text">
                <h1>Blu Kicks</h1>
                <p> Places where you can leverage tools and software to free up time to focus on growing the business.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-text">
                <h1>Angelus</h1>
                <p> All those apps took me months to get running. Now the site practically runs itself!</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-text">
                <h1>SoYoung</h1>
                <p> Unless you have a truly unique product, it will be very hard to differentiate and gain brand traction</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </Container>
      </section>
    </section>
  );
}
