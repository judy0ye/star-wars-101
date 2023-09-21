import './ErrorHandling.css'
import errorImg from '../../assets/michael-marais-JLHyIwix46c-unsplash.jpg'

function ErrorHandling() {
  return (
    <div className='error'>
      <h2>Error</h2>
      <img className='error-img' src={errorImg} />
    </div> 
  )
}

export default ErrorHandling