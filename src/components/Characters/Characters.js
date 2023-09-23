import './Characters.css'
import Character from '../Character/Character'
import Proptypes from 'prop-types'

function Characters({characters, isFavorite, toggleFavorite}) {
  const characterCards = characters.map((character) => {
    return(
      <Character
        id={character.id}
        key={character.id}
        name={character.name}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />)
  })
  return (
    <section className='characters-container'>{characterCards}</section>
  )
}

export default Characters

Characters.propTypes = {
  characters: Proptypes.arrayOf(
    Proptypes.shape({
      id: Proptypes.number,
      name: Proptypes.string.isRequired,
    })),
    isFavorite: Proptypes.array,
    toggleFavorite: Proptypes.func
}
