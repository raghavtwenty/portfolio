import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Raghava</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Portfolio</a>
                    </li>

                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#achievements" className="footer__link">Achievements</a>
                    </li>

                    <li>
                        <a href="#certifications" className="footer__link">Certifications</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                </ul>

                <span className="footer__copy">
                    &#169; Designed & developed by Raghava
                </span>
                <span className="footer__copy">
                    Last Updated - November, 2024
                </span>
            </div>
        </footer>
    )
}

export default Footer