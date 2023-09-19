import { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { getCharacters } from './apiCalls';

function App() {
  useEffect(() => {
    getCharacters()
    .then(data => console.log(data))
    .catch(err => console.log(err))
  })

  return (
    <Header />
  );
}

export default App;
