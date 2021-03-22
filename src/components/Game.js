import React from 'react';
import './Game.css';
import {Link} from 'react-router-dom';

const Game= ({id, name, background_image, released, genres, rating}) => {

    return(
        <div className='globalCard'>
            <img className='image' src={background_image} alt={name} />
				<div className='name'>{name}</div>
                <div className='genres'>Genre: {genres[0].name}</div>
				<div className='released'>{released}</div>
				<div className='rating'>Rating: {rating}</div>
                <Link className='lienDetails' to={{pathname:`/${id}`, 
                data: {id}}}>Details</Link>
        </div>
        
    )}

export default Game;