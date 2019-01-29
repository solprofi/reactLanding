import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/layout/Header/Header';
import Hero from './components/Hero/Hero';


class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: '1500px', background: 'cornflowerblue' }}>
        <Header />
        <Hero />
      </div>
    );
  }
}

export default App;
