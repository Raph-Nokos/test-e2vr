import axios from 'axios'
import React from 'react';
import { useState, useEffect } from 'react'
import Game from './Game'
import './GamesList.css'

const GamesList = () => {
    const [Games, setGames] = useState([])
   
    useEffect(() => {
      axios
        .get('https://api.rawg.io/api/games?key=484294a8cc70495fafa1f0cad2b3c287&dates=2019-01-01,2019-12-31&platforms=18,1,7')
        .then(response => setGames(response.data.results))
    }, [])
    console.log(Games)
  
    return (
        <div>
            <h1>List Popular Video Games</h1>
            <div className='globalGame'>
                {Games.map((game) => (
                    <Game {...game} key={game.id} />
                ))}
            </div>
        </div>
    )
};

export default GamesList