import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './GameDetails.css'

const GameDetails = (props) => {
	const [Game, setGame] = useState([])
    const gameId = props.id
	
    useEffect(() => {
		axios
			.get(`https://api.rawg.io/api/games/${gameId}`)
			.then(response => setGame(response.data))
	}, []);
	
    return (
			<div>
                <div>
				    <h1 className='detailsTitle'>{Game.name}</h1>
				    <img className='detailsImage' src={Game.background_image} alt={Game.name} />
				    <p>Released: {Game.released}</p>
				    <p className='detailsRating'>Rating: {Game.rating}</p>
                </div>
				<Link className='detailsLien' to='/'> Return to all games</Link>
			</div>
		)
}

export default GameDetails;