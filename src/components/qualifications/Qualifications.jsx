import React, { useState } from 'react';
import "./qualifications.css"

const Qualifications = () => {
    const [toggleState, setToggleState] =  useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="qualification section" id="portfolio">
            <h2 className="section__title">Qualifications</h2>
            <span className="section__subtitle">My Professional Journey</span>

            <div className='qualification__container container'>
                <div className="qualification__tabs">
                    <div onClick={()=>toggleTab(1)} className={toggleState===1?"qualification__button qualification__active button--flex": "qualification__button button--flex"}>
                        <i className='uil uil-graduation-cap qualification__icon'>
                        </i>                            
                        {" "} Education
                    </div>

                    <div onClick={()=>toggleTab(2)} className={toggleState===2?"qualification__button qualification__active button--flex": "qualification__button button--flex"}>
                        <i className='uil uil-suitcase-alt qualification__icon'>
                        </i>
                        {" "} Experience
                    </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState ===1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">M.Sc Artificial Intelligence & Machine Learning</h3>
                            <span className="qualification__subtitle">
                                Coimbatore Institute of Technology, Coimbatore
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 
                                {" "} 2021 - 2026
                            </div>
                            <div className="qualification__marks">
                                <i className="uil uil-file-check-alt"></i> 
                                {" "} CGPA - 8.7/10
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">High School</h3>
                            <span className="qualification__subtitle">
                                Kendriya Vidyalaya, Coimbatore
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 
                                {" "} 2021
                            </div>
                            <div className="qualification__marks">
                                <i className="uil uil-file-check-alt"></i> 
                                {" "} CGPA - 9.2/10
                            </div>
                        </div>
                    </div>                    
                </div>

                <div className={toggleState ===2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Malware Analyst</h3>
                            <span className="qualification__subtitle">
                                Defence Institute of Advanced Technology, Pune
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 
                                {" "} July - Nov, 2024
                            </div>
                            <div className="qualification__marks">
                                <i className="uil uil-file-check-alt"></i> 
                                {" "} Research Internship
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
    )
}

export default Qualifications