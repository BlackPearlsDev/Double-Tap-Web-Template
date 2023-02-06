import React from 'react';

function Card(props) {
    return (
        <div className='card'>
            <img src={props.imgSrc} alt={props.imgAlt} className="card-img"/>
            <h3 className="card-title">{props.title}</h3>
            <p className="card-para">{props.para}</p>
        </div>
    )
}

export default Card;