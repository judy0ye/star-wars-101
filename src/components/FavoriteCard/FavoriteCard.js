import './FavoriteCard.css'
import { Link } from 'react-router-dom'
import Proptypes from 'prop-types'
import favorite from '../../assets/emojisky.com-16967011.png'

function FavoriteCard({name, image, id, deleteFavorite}) {

  return (
    <div className='favorite-character-card'>
      <h2>{name}</h2> 
      <img className='fav-image' src={image} alt={name}/>
      <div className='actions-wrapper'>
        <Link className='see-more' to={`/character/${id}`}>See more</Link>
        <button className='delete' onClick={() => deleteFavorite(name)}>Delete Favorite 
         <img className='favorite' alt='grogu with heart' src={favorite}></img>
        </button>
      </div>
    </div>
  )
}

export default FavoriteCard

FavoriteCard.propTypes = {
  name: Proptypes.string.isRequired,
  id: Proptypes.number.isRequired,
  deleteFavorite: Proptypes.func.isRequired
}