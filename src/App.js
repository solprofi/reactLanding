import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/layout/Header/Header';
import Hero from './components/Hero/Hero';
import VenueInfo from './components/VenueInfo/VenueInfo';
import Highlights from './components/Highlights/Highlights';
import Pricing from './components/Pricing/Pricing';
import Location from './components/Location/Location';
import Footer from './components/layout/Footer/Footer';
import { Element } from 'react-scroll';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: '1500px' }}>
        <Header />
        <Element name='hero'>
          <Hero />
        </Element>
        <Element name='venueInfo'>
          <VenueInfo />
        </Element>
        <Element name='highlights'>
          <Highlights />
        </Element>
        <Element name='pricing'>
          <Pricing />
        </Element>
        <Element name='location'>
          <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
