import { Link, useParams } from 'react-router-dom'
import './CharacterDetails.css'
import backLink from '../../assets/emojisky.com-11247001.png'
import favorite from '../../assets/emojisky.com-16967011.png'
import background from '../../assets/martin-reisch-ddEBSlXB4YQ-unsplash.jpg'
import { useEffect } from 'react'
import { getSpecificCharacter } from '../../apiCalls'
import PropTypes from 'prop-types'

function CharacterDetails({setIsLoading, toggleFavorite, selectedCharacter, setSelectedCharacter, isFavorite, setError}) {
  const { id } = useParams()
  const img = `/characterImages/${selectedCharacter.name}.jpeg`
  console.log(selectedCharacter)

  useEffect(() => {
    setIsLoading(false)
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const characterDetails = await getSpecificCharacter(id)
        setSelectedCharacter(characterDetails);
      } catch (error) {
        setError(`${error.message}`);
      }
      setIsLoading(false)
    };

    fetchData();
  }, [id]);

  return Object.values(selectedCharacter).length > 0 && (
    <article className='character-display' style={{'--backdrop-img': `url(${background})` }}>
      <section className='back-and-fav-button'>
        <div className='back-container'>
         <Link className='back-to-main-link' to={'/'} >
            <div className='back'>
              <img className='back-image'src={backLink} />Back to Main
            </div>
          </Link>
        </div>
      <div className='specific-character-favorite'>
        <button className='specific-character-favorite-button' onClick={() => toggleFavorite(selectedCharacter.name)}>
          <img className='specific-character-favorite-image' 
            style={{ opacity: isFavorite.includes(selectedCharacter.name) ? 0.9 : 0.25 }}
          src={favorite}></img>
        </button>
      </div>
      </section>
      <div className='selected-character-details-container'>
        <div className='selected-character-image-and-name'>
          <h2 className='selected-character-details-name'>{selectedCharacter.name}</h2>
          <img className='characters' src={img} alt={selectedCharacter.name}/>
        </div>
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

CharacterDetails.propTypes = {
  toggleFavorite: PropTypes.func.isRequired,
  selectedCharacter: PropTypes.shape({
    name: PropTypes.string,
    height: PropTypes.string,
    hair_color: PropTypes.string,
    eye_color: PropTypes.string,
    skin_color: PropTypes.string,
    birth_year: PropTypes.string,
    gender: PropTypes.string
  }),
  setSelectedCharacter: PropTypes.func,
  isFavorite: PropTypes.array.isRequired,
  setError: PropTypes.func,
  setIsLoading: PropTypes.func
}
