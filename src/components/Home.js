import React from 'react';
import HomePage from './HomePage';
import Projects from './Projects';
import Family from './Family';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <HomePage />
      <Projects />
      <Family />
      <Footer />
    </div>
  );
}

export default Home;
