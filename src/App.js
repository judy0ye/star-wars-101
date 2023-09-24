import { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import { getCharacters } from './apiCalls';
import Characters from './components/Characters/Characters';
import AllFavoriteCharacters from './components/AllFavoriteCharacters/AllFavoriteCharacters';
import { Route, Routes, useLocation } from 'react-router-dom';
import CharacterDetails from './components/CharacterDetails/CharacterDetails';
import Navigation from './components/Navigation/Navigation';
import ErrorHandling from './components/ErrorHandling/ErrorHandling';
import addCharacterId from './utils';

function App() {
  const [characters, setCharacters] = useState([])
  const [isFavorite, setIsFavorite] = useState([])
  const [error, setError] = useState('')
  const location = useLocation().pathname
  const [selectedCharacter, setSelectedCharacter] = useState({})
  
  useEffect(() => {
    setError('')
  }, [location])
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const charactersData = await getCharacters();
        const filteredCharacters = addCharacterId(charactersData.results);
        setCharacters(filteredCharacters);
      } catch (error) {
        setError(`${error.message}`);
      }
    };
  
    fetchData();
  }, []);
  
  const toggleFavorite = (name) => {
    if (isFavorite.includes(name)) {
      setIsFavorite(isFavorite.filter(item => item !== name));
    } else {
      setIsFavorite([...isFavorite, name]);
    }
  }
  return (
    <main>
      <Header />
      {error && <ErrorHandling error={error}/>}
      <section>
        <Routes>
          <Route path='/' element={!error &&
            <>
              <Navigation/> 
                <Characters 
                  toggleFavorite={toggleFavorite} 
                  characters={characters} 
                  isFavorite={isFavorite} 
                />
            </>
          }/> 
          <Route path='/favorites' element={
            <>
              <Navigation/> 
                <AllFavoriteCharacters 
                  characters={characters} 
                  isFavorite={isFavorite} 
                  setIsFavorite={setIsFavorite}
                />
            </>
          }/>
        <Route path='/character/:id' element={
          <CharacterDetails 
            toggleFavorite={toggleFavorite} 
            selectedCharacter={selectedCharacter} 
            setSelectedCharacter={setSelectedCharacter} 
            isFavorite={isFavorite} 
            setError={setError}
          />}
        /> 
          <Route path='*' element={<ErrorHandling />}/>
        </Routes>
      </section>
    </main> 
  );
}

export default App;

