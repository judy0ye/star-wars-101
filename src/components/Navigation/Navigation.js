import './Navigation.css'

function Navigation({characters, isFavorite, setCharacters}) {
  const viewFavorites = () => {
    const filtered = characters && characters.filter(character => isFavorite[character.name] )
    console.log('filtered', filtered)
    setCharacters(filtered)
  }
  return(
    <section className='navigation-bar'>

      <button onClick={viewFavorites}>View Favorites</button>
      <button>View All</button>
    </section>
  )
}

export default Navigation