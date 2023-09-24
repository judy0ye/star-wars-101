import './Loading.css'
import grogu from '../../assets/emojisky.com-16967066.png'

function Loading() {
  return (
    <section className='loading-container'>
     <div className='spinner' role='status'>
      <span className='sr-only'>Loading</span>
    </div>
      <img className='spinner-img' aria-hidden='true' alt="grogu" src={grogu} />
    </section>
   
  )
}

export default Loading