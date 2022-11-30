import React, { useState } from 'react';
import "./Services.css";

const Services = () => {

    const [toggleState, setToggle] = useState(0);
    
    const toggleTab = (index) => {
        setToggle(index);
    };

    return (
        <section className="services" id="servicos">
            <h2 className="section__title">Serviços</h2>
            <span className="section__subtitle">O que eu faço</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Desenvolvimento <br/> Web</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(1)}>
                        Ver mais
                        <i onClick={() => toggleTab(0)} className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <h3 className="services__modal-title">Desenvolvimento <br/> Web</h3>
                            <p className='services__modal-title'>
                                Serviços com mais de dois anos de experiencia.
                                Provendo trabalhos de qualidade e para clientes e empresas.
                            </p>
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Desenvolvimento de sites</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Desenvolvimento de sistemas</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Desenvolvimento de aplicativos</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Desenvolvimento UX/UI</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Desenvolvimento de sistemas de gestão</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">UI/UX <br/> Designer</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(1)}>
                        Ver mais
                        <i onClick={() => toggleTab(0)} className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <h3 className="services__modal-title">UI/UX <br/> Designer</h3>
                            <p className='services__modal-title'>
                                Serviços com mais de dois anos de experiencia.
                                Provendo trabalhos de qualidade e para clientes e empresas.
                            </p>
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Desenvolvimento de sites</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Desenvolvimento de sistemas</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Desenvolvimento de aplicativos</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Desenvolvimento UX/UI</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Desenvolvimento de sistemas de gestão</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Designer <br/> de Produto</h3>
                    </div>
                    <span className="services__button" onClick={() => toggleTab(1)}>
                        Ver mais
                        <i onClick={() => toggleTab(0)} className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <h3 className="services__modal-title">Designer <br/> de Produto</h3>
                            <p className='services__modal-title'>
                                Serviços com mais de dois anos de experiencia.
                                Provendo trabalhos de qualidade e para clientes e empresas.
                            </p>
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Desenvolvimento de sites</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Desenvolvimento de sistemas</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Desenvolvimento de aplicativos</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Desenvolvimento UX/UI</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Desenvolvimento de sistemas de gestão</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Services;