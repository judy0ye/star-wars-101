import './Navigation.css'

function Navigation() {
  const viewFavorites = () => {
    
  }
  return(
    <section className='navigation-bar'>

      <button onClick={viewFavorites}>View Favorites</button>
      <button>View All</button>
    </section>
  )
}

export default Navigation