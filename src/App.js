import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { getCharacters } from './apiCalls';
import Characters from './components/Characters/Characters';
import { Route, Routes } from 'react-router-dom';
import CharacterDetails from './components/CharacterDetails/CharacterDetails';
import Navigation from './components/Navigation/Navigation';

function App() {
  const [characters, setCharacters] = useState([])
  const [isFavorite, setIsFavorite] = useState({})
  
  console.log({isFavorite})
  
  useEffect(() => {
    getCharacters()
    .then(data => setCharacters(data.results))
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
      <section className='main-display'>
        {/* <div className='navigation'>  */}  
        {/* </div> */}
        <Routes>
          <Route path='/' element={
          <>
            <Navigation /> 
            <Characters toggleFavorite={toggleFavorite} characters={characters} isFavorite={isFavorite} />
          </>
          }/> 
          <Route path='/character/:id' element={<CharacterDetails toggleFavorite={toggleFavorite} isFavorite={isFavorite}/>}/> 
        </Routes>
      </section>
    </main> 
  
  );
}

export default App;
