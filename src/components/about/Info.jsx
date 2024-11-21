import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box  img__container about1">
                <i class="uil uil-suitcase-alt"></i>
                <h3 className="about__title">Experience</h3>
                    <span className="about__subtitle">
                        Malware Analyst Internship
                    </span>
            </div>

            <div className="about__box  img__container about2">
                <i class="uil uil-trophy"></i>
                <h3 className="about__title">Hackathons</h3>
                    <span className="about__subtitle">2 Won
                    </span>
                    <br></br>
                    <span className="about__subtitle">3 Finalists
                    </span>
            </div>

            <div className="about__box  img__container about3">
                <i class="uil uil-monitor"></i>
                <h3 className="about__title">Completed</h3>
                    <span className="about__subtitle">
                        10+ Projects
                    </span>
            </div>
        </div>
    )
}

export default Info