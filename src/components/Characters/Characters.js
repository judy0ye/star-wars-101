import './Characters.css'
import Character from '../Character/Character'
import Proptypes from 'prop-types'

function Characters({filteredCharacters, characters, isFavorite, toggleFavorite}) {
  const characterCards = filteredCharacters.length > 0 && filteredCharacters.map(filteredCharacter => {
    const characterMatch = characters.find(character => character.name === filteredCharacter.name);
    const id = characterMatch && characters.indexOf(characterMatch) + 1 
  
  return(
    <Character 
      key={filteredCharacter.name}
      id={id}
      name={filteredCharacter.name}
      isFavorite={isFavorite[filteredCharacter.name]}
      toggleFavorite={toggleFavorite}
    />)
  })
  return (
    <section className='characters-container'>{characterCards}</section>
  )
}

export default Characters

Characters.propTypes = {
  characters: Proptypes.array.isRequired,
  filteredCharacters: Proptypes.arrayOf(
    Proptypes.shape({
      id: Proptypes.number,
      name: Proptypes.string.isRequired,
    })),
  isFavorite: Proptypes.object.isRequired,
  toggleFavorite: Proptypes.func.isRequired,
}
