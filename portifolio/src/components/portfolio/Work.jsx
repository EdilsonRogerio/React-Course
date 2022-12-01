import React from 'react';
import "./Work.css"
import Works from './Works';

const Work = () => {
  return (
    <section className="section work" id="portifolio">
        <h2 className="section__title">Portifolio</h2>
        <span className="section__subtitle">Meus Trabalhos Recentes</span>
        <Works />
    </section>
  )
}

export default Work;