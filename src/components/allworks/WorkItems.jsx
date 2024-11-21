import React from 'react'
import "./works.css"

const WorkItems = ({item}) => {
    return (
        <a href={item.link} target="_blank" rel="noopener noreferrer"   className="work__card" key={item.id}>
            <div alt="" className='work__img'  style={{backgroundImage:`url(${item.bg})`}}> </div>
            <h3 className="work__title">{item.title}</h3>
            <a href={item.link} target="_blank" rel="noopener noreferrer"  className="work__button">
                Working <i className="uil uil-arrow-right work__button-icon"></i>
            </a>
        </a>
    )
}

export default WorkItems