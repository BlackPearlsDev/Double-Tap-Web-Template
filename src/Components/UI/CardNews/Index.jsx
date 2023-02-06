import React from 'react'

function CardNews(props) {
    return (
        <div className='card-news'>
            <img src={props.imgSrc} alt={props.imgAlt} className="card-news-img"/>
            <h3 className="card-news-title">{props.title}</h3>
            <p className="card-news-para">{props.para}</p>
            <p className='card-news-date'>{props.date}</p>
        </div>
    )
}

export default CardNews