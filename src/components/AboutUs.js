import './AboutUs.css'
import logoImg from '../assets/Logo.png'
import locationImg from '../assets/location.png'

const AboutUs = () =>{
    return (
    <div id='About-us'>
        <p className='center'>About US</p>
       <div className='about-container'>
         <img src={logoImg}/>

         <div className='info'>
            <h2>Our Shop</h2>
            <p>lorem4dfgjhklmùlkjhgfdsqsdfghjklkjhgfds</p>
            
            <button>Contact us</button>
         </div>
         
         <img src={locationImg}/>

       </div>
       <div className='prob-solv'>

       </div>
    </div>
    )
}
export default AboutUs