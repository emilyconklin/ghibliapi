import React from 'react';

const Movie = ({title, director, desc, reldate, photo}) => {
    return (
        <div className="filmcard">
            <div className="title-contain"><h2>{title}</h2></div>
            <div className={title}></div>
            <ul>
            <li><strong>Director:</strong> {director}</li>
            <li><strong>Release Date:</strong> {reldate}</li>
            <li><strong>Description:</strong> {desc}</li>
            </ul>
        </div>
    );
}

export default Movie;