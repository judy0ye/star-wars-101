import { Link, useParams } from 'react-router-dom'
import './CharacterDetails.css'
// import background from '../../assets/michael-marais-JLHyIwix46c-unsplash.jpg'
import background from '../../assets/martin-reisch-ddEBSlXB4YQ-unsplash.jpg'
import { useEffect, useState } from 'react'
import { getSpecificCharacter } from '../../apiCalls'

function CharacterDetails() {
  const [selectedCharacter, setSelectedCharacter] = useState({})
  const { id } = useParams()

  useEffect(() => {
    getSpecificCharacter(id)
    .then(data => setSelectedCharacter(data))
    .catch(err => console.log(err))
  }, [id])

  return (
    <article >
      <Link className='back-to-main-link' to={'/'}>Back to Main</Link>
      <div className='background-image' style={{'--backdrop-img': `url(${background})` }}></div>
      <h2 className='selected-character-details-name'>{selectedCharacter.name}</h2>
      <div className='selected-character-details-container'>
        <div className='selected-character-details'>
          <p>Height: {selectedCharacter.height} cm</p>
          <p>Hair Color: {selectedCharacter.hair_color}</p>
          <p>Eye Color: {selectedCharacter.eye_color}</p>
          <p>Skin Color: {selectedCharacter.skin_color}</p>
          <p>Birth Year: {selectedCharacter.birth_year}</p>
          <p>Gender: {selectedCharacter.gender}</p>
        </div>
      </div>
    </article>
  )
}

export default CharacterDetails