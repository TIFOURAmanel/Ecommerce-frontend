
import AboutUs from '../components/AboutUs'
import './Home.css'
import cakeImg from '../assets/cakes.png'
import Cart from '../components/Cart'
import fruitsImg from '../assets/fruits.png'
import { useState } from 'react'

const Home = () =>{

        
        const listTradProd =[
          {id : 1 , image: {fruitsImg} , title: 'ooooo', paragraph:'fjfk' , price:'100 DA' },
          {id : 2 , image: {fruitsImg} , title: 'fhkjk', paragraph:'fjfk' , price:'100 DA' },
          {id : 3 , image: {fruitsImg} , title: 'fhkjk', paragraph:'fjfk' , price:'100 DA' },
          {id : 4 , image: {fruitsImg} , title: 'fhkjk', paragraph:'fjfk' , price:'100 DA' },
          {id : 5 , image: {fruitsImg} , title: 'fhkjk', paragraph:'fjfk' , price:'100 DA' },
          {id : 6 , image: {fruitsImg} , title: 'fhkjk', paragraph:'fjfk' , price:'100 DA' },
          {id : 7 , image: {fruitsImg} , title: 'fhkjk', paragraph:'fjfk' , price:'100 DA' },
          {id : 8 , image: {fruitsImg} , title: 'fhkjk', paragraph:'fjfk' , price:'100 DA' }
        ]

        const listModProd =[
            {id : 1 , image: {fruitsImg} , title: 'aaaaa', paragraph:'fjfk' , price:'100 DA' },
            {id : 2 , image: {fruitsImg} , title: 'AAA', paragraph:'fjfk' , price:'100 DA' },
            {id : 3 , image: {fruitsImg} , title: 'EE', paragraph:'fjfk' , price:'100 DA' },
            {id : 4 , image: {fruitsImg} , title: '55', paragraph:'fjfk' , price:'100 DA' },
            {id : 5 , image: {fruitsImg} , title: 'fhkjk', paragraph:'fjfk' , price:'100 DA' },
            {id : 6 , image: {fruitsImg} , title: 'fhkjk', paragraph:'fjfk' , price:'100 DA' },
            {id : 7 , image: {fruitsImg} , title: 'fhkjk', paragraph:'fjfk' , price:'100 DA' },
            {id : 8 , image: {fruitsImg} , title: 'fhkjk', paragraph:'fjfk' , price:'100 DA' }
          ]
          
        const listCackeProd =[
            {id : 1 , image: {fruitsImg} , title: 'bbbb', paragraph:'fjfk' , price:'100 DA' },
            {id : 2 , image: {fruitsImg} , title: 'fhkjk', paragraph:'fjfk' , price:'100 DA' },
            {id : 3 , image: {fruitsImg} , title: 'fhkjk', paragraph:'fjfk' , price:'100 DA' },
            {id : 4 , image: {fruitsImg} , title: 'fhkjk', paragraph:'fjfk' , price:'100 DA' },
            {id : 5 , image: {fruitsImg} , title: 'fhkjk', paragraph:'fjfk' , price:'100 DA' },
            {id : 6 , image: {fruitsImg} , title: 'fhkjk', paragraph:'fjfk' , price:'100 DA' },
            {id : 7 , image: {fruitsImg} , title: 'fhkjk', paragraph:'fjfk' , price:'100 DA' },
            {id : 8 , image: {fruitsImg} , title: 'fhkjk', paragraph:'fjfk' , price:'100 DA' }
          ]
        


          const [trad, setTrad] = useState(true);
          const [modern, setModern] = useState(false);
          const [cacke, setCacke] = useState(false);


       const fctTrad = () =>{
         setTrad(true)
         setModern(false)
         setCacke(false)
       }
       
       const fctModern = () =>{
        setTrad(false)
         setModern(true)
         setCacke(false)
       }
       
       const fctCacke = () =>{
        setTrad(false)
         setModern(false)
         setCacke(true)
       }
       

    return (
        <>
        <p className='welcom'> Welcome to our world </p>
        <div className='img-big'>
        <img  src={cakeImg}/>
        </div>
        
        <p id='catalogID'>Our Catalog</p>
        <div className='cake-types'>
            
             <button onClick={() => { fctTrad() }}> Traditional </button>
             <button onClick={() => { fctModern() }}> Modern </button>
             <button onClick={() => { fctCacke() }}> Cake </button>
            
        </div>
        
        <div className='sections'>
        
        { trad && listTradProd.map((product) => (
            <Cart key={product.id} image = {product.image}  title = {product.title}  paragraph = {product.paragraph} price = {product.price}/> 
            ) ) 
        
        }
        { modern && listModProd.map((product) => (
            <Cart key={product.id} image = {product.image}  title = {product.title}  paragraph = {product.paragraph} price = {product.price}/> 
            ) ) 
        
        }

        { cacke && listCackeProd.map((product) => (
            <Cart key={product.id} image = {product.image}  title = {product.title}  paragraph = {product.paragraph} price = {product.price}/> 
            ) ) 
        
        }

          
          


        </div>

        <AboutUs/>
        </>
    )
}

export default Home