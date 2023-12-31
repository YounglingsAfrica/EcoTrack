import React from 'react';
import Header from '../components/web/Header';
import Hero from '../components/web/Hero';
import About from '../components/web/About';
import Subscriptions from '../components/web/Subscriptions';
import Contact from '../components/web/Contact';
import Footer from '../components/web/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Subscriptions />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home