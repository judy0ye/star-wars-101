import './Navigation.css'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return(
    <section className='navigation-bar'>
      <NavLink to={`/`} className='view-all'>
        View All
      </NavLink>
      <NavLink  to={'/favorites'} className='view-fav'>
        View Favorites
      </NavLink>
    </section>
  )
}

export default Navigation
