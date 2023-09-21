import './Navigation.css'

function Navigation({isFavorite, setFilteredCharacters, characters}) {
  const viewFavorites = () => {
    const filtered = characters && characters.filter(character => isFavorite[character.name] )
    setFilteredCharacters(filtered)
  }

  const viewAll = () => {
    setFilteredCharacters(characters)
  }

  return(
    <section className='navigation-bar'>
      <button onClick={viewFavorites}>View Favorites</button>
      <button onClick={viewAll}>View All</button>
    </section>
  )
}

export default Navigation