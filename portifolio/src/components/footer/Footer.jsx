import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Edilson</h1>
                <ul className="footer__list">
                    <li className="footer__item">
                        <a href="#home" className="footer__link">Home</a>
                    </li>
                    <li className="footer__item">
                        <a href="#sobre" className="footer__link">Sobre</a>
                    </li>
                    <li className="footer__item">
                        <a href="#projetos" className="footer__link">Projetos</a>
                    </li>
                    <li className="footer__item">
                        <a href="#contacto" className="footer__link">Contacto</a>
                    </li>
                    <li className='footer__item'>
                        <a href="#testemunhos" className="footer__link">Testemunhos</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/edilson-rogerio-cuambe-b4999b211/" className="footer__social-link" target="_blank">
                        <i className="bx bxl-linkedin-square"></i>
                    </a>
                    <a href="
https://api.whatsapp.com/send?phone=85989400950&text=Ola" className="footer__social footer__social-link" target="_blank">
                        <i className="bx bxl-whatsapp"></i>
                    </a>
                    <a href="mailto:edilson@aluno.unilab.edu.br" className="footer__social footer__social-link" target="_blank">
                        <i className="bx bx-envelope"></i>
                    </a>
                    <a href="www.github.com/edilsonrogerio" className="footer__social footer__social-link" target="_blank">
                        <i className="bx bxl-github"></i>
                    </a>
                </div>
                <span className="footer__copy">&#169; Edilson Cuambe. Todos os Direitos Reservados.</span>
            </div>
        </footer>
    );
};

export default Footer;