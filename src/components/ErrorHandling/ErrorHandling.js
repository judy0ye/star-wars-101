import './ErrorHandling.css'
import errorImg from '../../assets/michael-marais-JLHyIwix46c-unsplash.jpg'

function ErrorHandling({error}) {
  return (
    <div className='error'>
      <h2>{error}</h2>
      <img className='error-img' src={errorImg} />
    </div> 
  )
}

export default ErrorHandling