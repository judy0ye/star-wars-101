import './Characters.css'
import Character from '../Character/Character'

function Characters({characters}) {
  const characterCards = characters.map(character => ( 
    <Character 
      key={character.name}
      name={character.name}
      height={character.height}
      hairColor={character.hair_color}
      skinColor={character.skin_color}
      eyeColor={character.eye_color}
      birthYear={character.birth_year}
      gender={character.gender}
    />)
  )
  return (
    <section className='characters-container'>{characterCards}</section>
  )
}

export default Characters