import './Characters.css'
import Character from '../Character/Character'

function Characters({characters, isFavorite, toggleFavorite}) {
  const characterCards = characters.length > 0 && characters.map((character, index)=> ( 
    <Character 
      key={character.name}
      id={index+1}
      name={character.name}
      height={character.height}
      hairColor={character.hair_color}
      skinColor={character.skin_color}
      eyeColor={character.eye_color}
      birthYear={character.birth_year}
      gender={character.gender}
      isFavorite={isFavorite[character.name]}
      toggleFavorite={toggleFavorite}
    />)
  )
  return (
    <section className='characters-container'>{characterCards}</section>
  )
}

export default Characters