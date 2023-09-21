import './ErrorHandling.css'
import errorImg from '../../assets/michael-marais-JLHyIwix46c-unsplash.jpg'

function ErrorHandling({error}) {
  return (
    <div className='error'>
      {error ? <h2>{error}</h2> : <h2>Sorry, this page does not exist</h2>}
      <button>Retry</button>
      <img className='error-img' src={errorImg} />
    </div> 
  )
}

export default ErrorHandling