import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { getCharacters } from './apiCalls';
import Characters from './components/Characters/Characters';
import { Route, Routes } from 'react-router-dom';
import CharacterDetails from './components/CharacterDetails/CharacterDetails';
import Navigation from './components/Navigation/Navigation';
import ErrorHandling from './components/ErrorHandling/ErrorHandling';

function App() {
  const [characters, setCharacters] = useState([])
  const [isFavorite, setIsFavorite] = useState({})
  const [filteredCharacters, setFilteredCharacters] = useState([])
  
  useEffect(() => {
    getCharacters()
    .then(data => {
      setCharacters(data.results)
      setFilteredCharacters(data.results)})
    .catch(err => console.log(err))
  }, [])

  const toggleFavorite = (name) => {
    const updatedFavorites = {...isFavorite}
    updatedFavorites[name] = !updatedFavorites[name]
    
    setIsFavorite(updatedFavorites)
  }

  
  return (
    <main>
      <Header />
      <ErrorHandling />
      <section className='main-display'>
        <Routes>
          <Route path='/' element={
            <>
              <Navigation characters={characters} filteredCharacters={filteredCharacters} setFilteredCharacters={setFilteredCharacters} isFavorite={isFavorite}/> 
              <Characters filteredCharacters={filteredCharacters} toggleFavorite={toggleFavorite} characters={characters} isFavorite={isFavorite} />
            </>
          }/> 
          <Route path='/character/:id' element={<CharacterDetails toggleFavorite={toggleFavorite} isFavorite={isFavorite}/>}/> 
        </Routes>
      </section>
    </main> 
  
  );
}

export default App;
