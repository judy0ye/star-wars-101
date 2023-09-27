import './Characters.css'
import Character from '../Character/Character'
import Proptypes from 'prop-types'
import mainBackground from '../../assets/emmanuel-denier-YiXsjwJKXmo-unsplash.jpg'

function Characters({characters, isFavorite, toggleFavorite}) {
  const characterCards = characters.map((character) => {
    const img = `/characterImages/${character.id}.jpeg`
    return(
      <Character
        id={character.id}
        key={character.id}
        image={img}
        name={character.name}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />)
  })
  return (
    <section className='container' style={{'--backdrop-img': `url(${mainBackground})` }}>
      <div className='characters-container'>{characterCards}</div>
    </section>
    
   
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
