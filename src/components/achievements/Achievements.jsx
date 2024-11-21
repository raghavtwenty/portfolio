import React from 'react';
import "./achievements.css";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Achievements = () => {
    return (
        <section className="achievements section" id="achievements">
            <h2 className="section__title">Achievements</h2>
            <span className="section__subtitle">My Milestones</span>

            <Swiper className="achievements__container grid" 
            loop={true}
            spaceBetween={24}
            pagination={{
            clickable: true,
            }}
            breakpoints={{
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 48,
            },
            }}
            modules={[Pagination]}
            >
                {Data.map(({id, image, title, description, link, bg}) => {
                    return (
                        <SwiperSlide className="achievements__card" key={id}>
                            <div className=" img__container bg__img" style={{backgroundImage:`url(${bg})`}}>
                                <div className="img__align">
                                <img src={image} alt="" className='achievements__img'></img>
                                    <h3 className="achievement__name">
                                        {title}
                                    </h3>
                                </div>
                                    <p className='achievements__description'>
                                        {description}
                                    </p>
                                    <a href={link} target="_blank" rel="noopener noreferrer" className="achievements__button">Read More
                                    <i className="uil uil-arrow-right achievements__button-icon"></i>
                                    </a>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Achievements