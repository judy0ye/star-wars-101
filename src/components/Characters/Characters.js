import './Characters.css'
import Character from '../Character/Character'

function Characters({filteredCharacters, characters, isFavorite, toggleFavorite}) {
  const characterCards = filteredCharacters.length > 0 && filteredCharacters.map(filteredCharacter => {
    const characterMatch = characters.find(character => character.name === filteredCharacter.name);
    const id = characterMatch && characters.indexOf(characterMatch) + 1 
  
  return(
    <Character 
      key={filteredCharacter.name}
      id={id}
      name={filteredCharacter.name}
      height={filteredCharacter.height}
      hairColor={filteredCharacter.hair_color}
      skinColor={filteredCharacter.skin_color}
      eyeColor={filteredCharacter.eye_color}
      birthYear={filteredCharacter.birth_year}
      gender={filteredCharacter.gender}
      isFavorite={isFavorite[filteredCharacter.name]}
      toggleFavorite={toggleFavorite}
    />)
  })
  return (
    <section className='characters-container'>{characterCards}</section>
  )
}

export default Characters