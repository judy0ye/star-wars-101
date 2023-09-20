import { useParams } from 'react-router-dom'
import './CharacterDetails.css'
import { useEffect, useState } from 'react'
import { getSpecificCharacter } from '../../apiCalls'

function CharacterDetails() {
  const [selectedCharacter, setSelectedCharacter] = useState({})
  const { id } = useParams()

  useEffect(() => {
    getSpecificCharacter(id)
    .then(data => setSelectedCharacter(data))
    .catch(err => console.log(err))
  })

  return (
    <article>
      <h2>{selectedCharacter.name}</h2>
      <p>Height: {selectedCharacter.height} cm</p>
      <p>Hair Color: {selectedCharacter.hairColor}</p>
      <p>Eye Color: {selectedCharacter.eyeColor}</p>
      <p>Skin Color: {selectedCharacter.skinColor}</p>
      <p>Birth Year: {selectedCharacter.birthYear}</p>
      <p>Gender: {selectedCharacter.gender}</p>
    </article>
  )
}

export default CharacterDetails