import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Specs from './components/Specs';
import Orders from './components/Orders';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-black text-white">
      <Header />
      <Hero />
      <Features />
      <Specs />
      <Orders />
      <Footer />
    </div>
  );
}

export default App;