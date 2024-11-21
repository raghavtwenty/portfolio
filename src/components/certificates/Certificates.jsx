import React from 'react'
import "./certificates.css";
import { Data } from './Data';

const Certificates = () => {
    return (
        <section className="certificates section" id="certifications">
            <h2 className="section__title">Certifications</h2>
            <span className="section__subtitle">My Professional Credentials</span>

            <div className="certificates__container container grid">

                <div className="certificates__content  img__container certificates__img">
                    <div className="certificates__box">
                        <div className="certificates__group">

                                {Data.map(({id, name, date}) => {
                                    return (
                                        <div className="certificates__data">
                                            <i class="uil uil-award-alt"></i>
                                            <div>
                                                <h3 className="certificates__name">{name}</h3>
                                                <span className="certificates__level">{date}</span>
                                            </div>
                                        </div>
                                    )})}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certificates