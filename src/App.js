import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { getCharacters } from './apiCalls';
import Characters from './components/Characters/Characters';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [characters, setCharacters] = useState([])
 
  useEffect(() => {
    getCharacters()
    .then(data => setCharacters(data.results))
    .catch(err => console.log(err))
  }, [])

  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<Characters characters={characters}/>}/>  
      </Routes>
    </main>
  );
}

export default App;
