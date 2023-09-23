import { useEffect, useState } from 'react';
import './App.css';
import mainBackground from './assets/emmanuel-denier-YiXsjwJKXmo-unsplash.jpg'
import Header from './components/Header/Header';
import { getCharacters } from './apiCalls';
import Characters from './components/Characters/Characters';
import { Route, Routes, useLocation } from 'react-router-dom';
import CharacterDetails from './components/CharacterDetails/CharacterDetails';
import Navigation from './components/Navigation/Navigation';
import ErrorHandling from './components/ErrorHandling/ErrorHandling';

function App() {
  const [characters, setCharacters] = useState([])
  const [isFavorite, setIsFavorite] = useState({})
  const [filteredCharacters, setFilteredCharacters] = useState([])
  const [error, setError] = useState('')
  const location = useLocation().pathname

  useEffect(() => {
    setError('')
  }, [location])
  
  useEffect(() => {
    getCharacters()
    .then(data => {
      setCharacters(data.results)
      setFilteredCharacters(data.results)})
    .catch(error => setError(`${error.message}`))
  }, [])

  const toggleFavorite = (name) => {
    const updatedFavorites = {...isFavorite}
    updatedFavorites[name] = !updatedFavorites[name]
  
    setIsFavorite(updatedFavorites)
  }

  
  return (
    <main>
      <Header />
      {error && <ErrorHandling error={error}/>}
      <section className='main-display' style={{'--backdrop-img': `url(${mainBackground})` }}>
        <Routes>
          <Route path='/' element={!error &&
            <>
              <Navigation characters={characters} filteredCharacters={filteredCharacters} setFilteredCharacters={setFilteredCharacters} isFavorite={isFavorite}/> 
              <Characters filteredCharacters={filteredCharacters} toggleFavorite={toggleFavorite} characters={characters} isFavorite={isFavorite} />
            </>
          }/> 
          <Route path='/character/:id' element={<CharacterDetails error={error} toggleFavorite={toggleFavorite} isFavorite={isFavorite} setError={setError}/>}/> 
          <Route path='*' element={<ErrorHandling />}/>
        </Routes>
      </section>
    </main> 
  
  );
}

export default App;
