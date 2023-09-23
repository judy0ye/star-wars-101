import './AllFavoriteCharacters.css'
import FavoriteCard from '../FavoriteCard/FavoriteCard'
import Proptypes from 'prop-types'

function AllFavoriteCharacters({characters, isFavorite, setIsFavorite}) {
  const favoriteCharacters = characters.filter(character => isFavorite.includes(character.name));

  const deleteFavorite = name => {
    const filteredFavorites = isFavorite.filter(favoritedCharacter => {
      return name !== favoritedCharacter
    })
    setIsFavorite(filteredFavorites)
  }   

  const characterCards = favoriteCharacters.map(character => {
    return (
      <FavoriteCard 
        key={character.name}
        id={character.id}
        name={character.name}
        deleteFavorite={deleteFavorite}
      />)
  })
 
    return (
      <section className='characters-container'>{characterCards}</section>
    )
}

export default AllFavoriteCharacters

AllFavoriteCharacters.propTypes = {
  characters: Proptypes.arrayOf(
    Proptypes.shape({
      id: Proptypes.number,
      name: Proptypes.string.isRequired,
    })),
  isFavorite: Proptypes.array.isRequired,
  setIsFavorite: Proptypes.func.isRequired,
}