import React, {useState} from 'react'
import "./header.css";

const Header = () => {
    const handleShare = async () => {
        if (navigator.share) {
        try {
            await navigator.share({
                title: "Raghava's Portfolio",
                text: "Check out Raghava's amazing website!",
                url: window.location.href,
            });
            } catch (err) {
                console.error("Error sharing:", err);
            }}
        }

    window.addEventListener("scroll", function(){
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) {
            header.classList.add("scroll-header");
        } else {
            header.classList.remove("show-scroll-header");
        }
    })

    const [Toggle, showMenu] = useState(false);
    return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Raghava</a>
            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid" style={{"z-index":1000}}>

                    <li className="nav__item">
                        <a href="#home" className="nav__link" active-link>
                            <i className="uil uil-estate nav__icon"></i>
                            Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i className="uil uil-user-circle nav__icon"></i>
                            About
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link">
                            <i className="uil uil-notebooks nav__icon"></i>
                            Portfolio
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#projects" className="nav__link">
                            <i className="uil uil-laptop nav__icon"></i>
                            Projects
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#achievements" className="nav__link">
                            <i className="uil uil-medal nav__icon"></i>
                            Achievements
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#certifications" className="nav__link">
                            <i className="uil uil-award-alt nav__icon"></i>
                            Certifications
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                            <i className="uil uil-file-alt nav__icon"></i>
                            Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <i className="uil uil-message nav__icon"></i>
                            Contact
                        </a>
                    </li>

                <li onClick={handleShare} className="nav__item">
                        <a href="#share" className="nav__link">
                            <i className="uil uil-share-alt nav__icon"></i>
                            Share
                        </a>
                </li>
                </ul>

                <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
            </div>
            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <i class="uil uil-apps"></i>
            </div>
        </nav>
    </header>
    )
}

export default Header