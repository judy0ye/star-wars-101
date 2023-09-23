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
 
    return characterCards.length > 0 ? (
      <section className='characters-container'>{characterCards}</section>
    ): <h2 className='no-favorites'>  No Favorites Yet</h2>
}

export default AllFavoriteCharacters

AllFavoriteCharacters.propTypes = {
  characters: Proptypes.arrayOf(
    Proptypes.shape({
      id: Proptypes.number,
      name: Proptypes.string,
    })),
  isFavorite: Proptypes.array.isRequired,
  setIsFavorite: Proptypes.func.isRequired,
}