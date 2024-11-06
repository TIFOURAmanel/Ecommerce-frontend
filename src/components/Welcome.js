import './Welcome.css'
import cakeImg from '../assets/cakes.png'

const Welcome = () =>{
    return(
        <div>
             <p className='welcom'> Welcome to our world </p>
             <div className='img-big'>
               <img  src={cakeImg}/>
             </div>
        </div>
    )
}


export default Welcome 