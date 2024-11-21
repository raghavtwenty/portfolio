import React from 'react'
import "./home.css";
import Social from './Social';
import Info from './Info';
import ScrollDown from './ScrollDown';


const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social/>
                    <div className="home__img"></div>
                    <Info/>
                </div>
                <ScrollDown/>
            </div>
        </section>
    )
}

export default Home