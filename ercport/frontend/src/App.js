import React from 'react'

import { About, Header, Footer, Skills, Testemunho, Trabalho } from './container';
import { Navbar } from './components';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Trabalho />
      <Skills />
      <Testemunho />
      <Footer />
    </div>
  );
};

export default App