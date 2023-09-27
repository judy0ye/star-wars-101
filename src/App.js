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
import Loading from './components/Loading/Loading';

function App() {
  const [characters, setCharacters] = useState([])
  const [isFavorite, setIsFavorite] = useState([])
  const [isloading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const location = useLocation().pathname
  const [selectedCharacter, setSelectedCharacter] = useState({})
  
  useEffect(() => {
    setError('')
    setSelectedCharacter({})
  }, [location])
    
  useEffect(() => {
    setIsLoading(false)
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const charactersData = await getCharacters();
        const filteredCharacters = addCharacterId(charactersData.results);
        setCharacters(filteredCharacters);
      } catch (error) {
        setError(`${error.message}`);
      }
      setIsLoading(false)
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
      {isloading && <Loading />}
      {error && <ErrorHandling error={error}/>}
      <section>
        <Routes>
          <Route path='/' element={!error && !isloading &&
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
            setIsLoading={setIsLoading}
            isloading={isloading}
          />}
        /> 
          <Route path='*' element={<ErrorHandling />}/>
        </Routes>
      </section>
    </main> 
  );
}

export default App;

