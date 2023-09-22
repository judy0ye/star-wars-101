import './Character.css'
import favorite from '../../assets/emojisky.com-16967011.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Character({name, id, isFavorite, toggleFavorite, height, hairColor, skinColor, eyeColor, birthYear, gender}) {
  
  const imgOpacity = isFavorite ? 0.9 : 0.25

  const styleFavoriteImage = {
    opacity: imgOpacity 
  }

  return (
    <div className='character-card'>
      <h2>{name}</h2> 
      <div>
        <Link to={`/character/${id}`}>See more</Link>
        <button onClick={() => toggleFavorite(name)}>
          <img className='favorite' alt='grogu with heart' style={styleFavoriteImage} src={favorite}></img>
        </button>
      </div>
    </div>
  )
}

export default Character