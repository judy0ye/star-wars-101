import './ErrorHandling.css'
import errorImg from '../../assets/michael-marais-JLHyIwix46c-unsplash.jpg'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function ErrorHandling({error}) {
  return (
    <div className='error-display' style={{'--backdrop-img': `url(${errorImg})` }}>
      {error ? <h2 className='error-message'>{error}</h2> : <h2 className='error-message'>Sorry, this page does not exist</h2>}
      <Link className='retry' to={'/'}>Retry</Link>
    </div> 
  )
}

export default ErrorHandling

ErrorHandling.propTypes = {
  error: PropTypes.string
}