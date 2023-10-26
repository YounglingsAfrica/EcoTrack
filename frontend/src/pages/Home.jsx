import React from 'react';
import Header from '../components/web/Header';
import Hero from '../components/web/Hero';
import About from '../components/web/About';
import Services from '../components/web/Services';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
    </div>
  )
}

export default Home