import './Navigation.css'
import PropTypes from 'prop-types'

function Navigation({isFavorite, setFilteredCharacters, characters}) {
  const viewFavorites = () => {
    const filtered = characters && characters.filter(character => isFavorite[character.name] )
    setFilteredCharacters(filtered)
  }

  const viewAll = () => {
    setFilteredCharacters(characters)
  }

  return(
    <section className='navigation-bar'>
      <button className='view-fav-btn'onClick={viewFavorites}>View Favorites</button>
      <button className='view-all-btn' onClick={viewAll}>View All</button>
    </section>
  )
}

export default Navigation

Navigation.propTypes = {
  isFavorite: PropTypes.object.isRequired,
  setFilteredCharacters: PropTypes.func.isRequired,
  characters: PropTypes.array.isRequired
}