import './Catalog.css'
import { useState } from 'react'
import ProductLists from '../ProducLists'
import Cart from '../components/Cart'



const Catalog = () =>{

    const [trad, setTrad] = useState(true);
    const [modern, setModern] = useState(false);
    const [cacke, setCacke] = useState(false);
    // const [tradColor, setColorTrad] = useState("black")
    // const [modernColor, setColorModern] = useState("black")
    // const [cakeColor, setColorCake] = useState("black")




          const fctTrad = (event) =>{
            // tradColor = event.target.style.color 
            // setColorTrad ("rgba(157, 75, 25, 1)") ;
            // setColorModern("black")
            // setColorCake("black")
             setTrad(true)
             setModern(false)
             setCacke(false)
           }
           

           const fctModern = (event) =>{
            // setColorTrad("black")
            // modernColor = event.target.style.color 
            // setColorModern ("rgba(157, 75, 25, 1)") ;
            // setColorCake("black")
             setTrad(false)
             setModern(true)
             setCacke(false)
           }
           
           const fctCacke = (event) =>{
            // setColorTrad("black")
            // setColorModern ("black") ;
            // cakeColor = event.target.style.color 
            // setColorCake ("rgba(157, 75, 25, 1)")
             setTrad(false)
             setModern(false)
             setCacke(true)
           }



    return (

       
        <div>
          
          <p id='catalogID'>Our Catalog</p>
          <div className='cake-types'>
             <a href='#catalogID' className='color-button' onClick={(event) => { fctTrad(event) }}> Traditional </a>
             <a href='#catalogID' className='color-button' onClick={(event) => { fctModern(event) }}> Modern </a>
             <a href='#catalogID' className='color-button' onClick={(event) => { fctCacke(event) }}> Cake </a>
            
          </div>

          <div className='sections'>
        
              { trad && ProductLists.traditional.map((product) => (
               <Cart key={product.id} image = {product.image}  title = {product.title}  paragraph = {product.paragraph} price = {product.price}/> 
                 ) ) 
        
              }
              { modern && ProductLists.modern.map((product) => (
                <Cart key={product.id} image = {product.image}  title = {product.title}  paragraph = {product.paragraph} price = {product.price}/> 
                ) ) 
        
              }

              { cacke && ProductLists.cacke.map((product) => (
               <Cart key={product.id} image = {product.image}  title = {product.title}  paragraph = {product.paragraph} price = {product.price}/> 
               ) ) 
        
              }

          

          </div>



        </div>
    )
}


export default Catalog

 

