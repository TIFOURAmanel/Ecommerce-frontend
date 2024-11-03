import './Footer.css'
import instaImg from '../assets/instagram.png'
import fbImg from '../assets/facebook.png'
import tiktokImg from '../assets/telegram.png'


const Footer = () =>{
    return (
       <div className='footer-container'>
         <p className="contact-p">Contact us :</p>

         <div className='span-height'>
           
            <span className='footer-span'> +213 (0) 657987786</span>
            <span> 
               
                <a href="https://www.instagram.com/gateaux_gourmands_nada?igsh=ODMwczJldDl6N3Nh">  <img src ={fbImg}/>  </a>
                <a href = "https://www.tiktok.com/@gateaux_gourmands_nada?_t=8r5gsw4E085&_r=1"  >  <img src={tiktokImg}/>  </a>
                <a href = "https://www.instagram.com/gateaux_gourmands_nada?igsh=ODMwczJldDl6N3Nh" >  <img src={instaImg}/>  </a>
            </span>

         </div>
         <hr/>
         <hr></hr>
        </div>
    )
}

export default Footer