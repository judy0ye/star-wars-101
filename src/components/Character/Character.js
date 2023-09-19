import './Character.css'

function Character({name, height, hairColor, eyeColor, birthYear, gender}) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{height}</p>
      <p>{hairColor}</p>
      <p>{eyeColor}</p>
      <p>{birthYear}</p>
      <p>{gender}</p>
    </div>
  )
}

export default Character