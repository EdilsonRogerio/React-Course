import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
  });

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <header className="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">Edilson</a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
            <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-user nav__icon"></i> Sobre
              </a>
            </li>
            <li className="nav__item">
            <a href="#habilidades" onClick={() => setActiveNav("#habilidades")} className={activeNav === "#habilidades" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-file-alt nav__icon"></i> Habilidades
              </a>
            </li>
            <li className="nav__item">
            <a href="#servicos" onClick={() => setActiveNav("#servicos")} className={activeNav === "#servicos" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-briefcase-alt nav__icon"></i> Serviços
              </a>
            </li>
            <li className="nav__item">
            <a href="#portifolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-scenery nav__icon"></i> Portifolio
              </a>
            </li>
            <li className="nav__item">
            <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-message nav__icon"></i> Contacte Me
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav__close" id="nav-close" onClick={() => showMenu(!Toggle)}></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps" id="nav-toggle"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;