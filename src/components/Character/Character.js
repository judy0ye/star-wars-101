import './Character.css'
import { Link } from 'react-router-dom'
import Proptypes from 'prop-types'
import favorite from '../../assets/emojisky.com-16967011.png'

function Character({name, id, isFavorite, toggleFavorite}) {
  const opacity = isFavorite.includes(name) ? 0.9 : 0.25;

  return (
    <div className='character-card'>
      <h2>{name}</h2> 
      <div>
        <Link className='see-more' to={`/character/${id}`}>See more</Link>
      </div>
      <button className='favorite-button' onClick={() => toggleFavorite(name)}>
         <img 
            className='favorite' 
            alt='grogu with heart' 
            style={{ opacity }} 
            src={favorite}>
          </img>
      </button>
    </div>
  )
}

export default Character

Character.propTypes = {
  name: Proptypes.string.isRequired,
  id: Proptypes.number.isRequired,
  isFavorite: Proptypes.array,
  toggleFavorite: Proptypes.func
}
