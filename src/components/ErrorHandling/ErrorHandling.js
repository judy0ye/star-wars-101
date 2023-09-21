import './ErrorHandling.css'
import errorImg from '../../assets/michael-marais-JLHyIwix46c-unsplash.jpg'
import { Link } from 'react-router-dom'

function ErrorHandling({error}) {
  return (
    <div className='error'>
      {error ? <h2>{error}</h2> : <h2>Sorry, this page does not exist</h2>}
      <img className='error-img' src={errorImg} />
      <Link className='retry' to={'/'}>Retry</Link>
    </div> 
  )
}

export default ErrorHandling