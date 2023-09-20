import './Character.css'
import favorite from '../../assets/emojisky.com-16967011.png'
import { Link } from 'react-router-dom'

function Character({name, height, hairColor, skinColor, eyeColor, birthYear, gender}) {
  return (
    <div className='character-card'>
      <h2>{name}</h2>
      <p>Height: {height} cm</p>
      <p>Hair Color: {hairColor}</p>
      <p>Eye Color: {eyeColor}</p>
      <p>Skin Color: {skinColor}</p>
      <p>Birth Year: {birthYear}</p>
      <p>Gender: {gender}</p>
      <div>
        <Link>See more</Link>
        <img className='favorite' src={favorite}></img>
      </div>
    </div>
  )
}

export default Character