import React from 'react'
import "./works.css"
import Work from './Work'

const Works = () => {
    return (
        <section className="work section">
            <h2 className="section__title">Works</h2>
            <span className="section__subtitle">All projects</span>

            <Work/>

        </section>
    ) 
}

export default Works