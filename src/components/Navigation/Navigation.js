import './Navigation.css'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return(
    <section className='navigation-bar'>
      <NavLink to={`/`} className='nav-link'>
        View All
      </NavLink>
      <NavLink to={'/favorites'} className='nav-link'>
        View Favorites
      </NavLink>
    </section>
  )
}

export default Navigation
