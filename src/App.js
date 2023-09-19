import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { getCharacters } from './apiCalls';
import Characters from './components/Characters/Characters';

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
      <Characters characters={characters}/>
    </main>
  );
}

export default App;
