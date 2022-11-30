import React, { useState } from 'react';
import "./Qualifications.css";

const Qualifications = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="section qualification" id="qualificacoes">
            <h2 className="section__title">Qualificações</h2>
            <span className="section__subtitle">Minha jornada</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div onClick={() => toggleTab(1)} className={toggleState === 1 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Experiencia
                    </div>
                    <div onClick={() => toggleTab(2)} className={toggleState === 2 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Educacao
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">UNILAB</h3>
                                <span className="qualification__subtitle">PROJETO DE EXTENSAO: Painel Covid-19</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2021 - 2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">UNILAB</h3>
                                <span className="qualification__subtitle">PROJETO DE PESQUISA: Camera Arduino</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">UNILAB</h3>
                                <span className="qualification__subtitle">PROJETO DE EXTENSAO: Traducao Tecnica</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022 - Presente
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">UNILAB</h3>
                                <span className="qualification__subtitle">GRADUAÇAO: Engeharia da Computacao</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2020 - presente
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">HARVARD</h3>
                                <span className="qualification__subtitle">CS50: Introudcao a Ciencia da Computacao</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">HARVARD</h3>
                                <span className="qualification__subtitle">CS50 WEB: Desenvolvimento Web com JavaScript e Python</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualifications;