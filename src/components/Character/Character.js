import './Character.css'
import favorite from '../../assets/emojisky.com-16967011.png'
import { Link } from 'react-router-dom'

function Character({name, id, height, hairColor, skinColor, eyeColor, birthYear, gender}) {
  return (
    <div className='character-card'>
      <h2>{name}</h2>
     
      <div>
        <Link to={`/character/${id}`}>See more</Link>
        <img className='favorite' src={favorite}></img>
      </div>
    </div>
  )
}

export default Character