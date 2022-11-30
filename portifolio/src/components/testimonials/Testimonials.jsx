import React from 'react';
import "./Testimonials.css";
import { Data } from './Data';

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from 'swiper';

const Testimonials = () => {
  return (
    <section className="testimonial container section" id='testemunhos'>
        <h2 className="section__title">Meus clientes dizem</h2>
        <p className='section__subtitle'>Testemunhos</p>
        <Swiper className="testimonial__container"
            loop={true}
            spaceBetween={24}
            pagination={{
                "clickable": true
            }}
            grabCursor={true}
            breakpoints={{
                "576": {
                    "slidesPerView": 2,
                },
                "768": {
                    "slidesPerView": 2,
                    "spaceBetween": 48
                },
            }}
            modules={[Pagination]}

        >
            {
                Data.map(({ id, image, name, work, description }) => {
                    return (
                        <SwiperSlide key={id} className="testimonial__card">
                            <img src={image} alt="" className="testimonial__img" />
                            <h3 className="testimonial__name">{name}</h3>
                            <span className="testimonial__client">{work}</span>
                            <p className="testimonial__description">{description}</p>
                        </SwiperSlide>
                    );
                })
            }
        </Swiper>
    </section>
  )
}

export default Testimonials;