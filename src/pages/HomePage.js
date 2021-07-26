import React from 'react';
import Definition from '../components/Definition';
import HelpTips from '../components/HelpTips';

import Hero from '../components/Hero';

import Resource from '../components/Resource';
import Slider from '../components/Slider';
import Footer from '../parts/Footer';
import Header from '../parts/Header';

import './style.scss';

export default function HomePage() {
  return (
    <div className="hero-banner">
      <Header />
      <Hero />
      <Definition />
      <Slider />
      <Resource />
      <HelpTips />
      <Footer />
    </div>
  );
}
