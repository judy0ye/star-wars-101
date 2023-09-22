import './Character.css'
import favorite from '../../assets/emojisky.com-16967011.png'
import { Link } from 'react-router-dom'
import Proptypes from 'prop-types'

function Character({name, id, isFavorite, toggleFavorite}) {
  const imgOpacity = isFavorite ? 0.9 : 0.25

  const styleFavoriteImage = {
    opacity: imgOpacity 
  }

  return (
    <div className='character-card'>
      <h2>{name}</h2> 
      <div>
        <Link to={`/character/${id}`} style={{textDecoration:'none'}}>See more</Link>
      </div>
        <button onClick={() => toggleFavorite(name)}>
          <img className='favorite' alt='grogu with heart' style={styleFavoriteImage} src={favorite}></img>
        </button>
    </div>
  )
}

export default Character

Character.propTypes = {
  name: Proptypes.string.isRequired,
  id: Proptypes.number.isRequired,
  isFavorite: Proptypes.bool,
  toggleFavorite: Proptypes.func.isRequired
}