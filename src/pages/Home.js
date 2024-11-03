
import AboutUs from '../components/AboutUs'
import './Home.css'
import cakeImg from '../assets/cakes.png'
import Cart from '../components/Cart'
import ProductList from '../ProductList'

const Home = () =>{
    return (
        <>
        <p className='welcom'> Welcom to our world </p>
        <div className='img-big'>
        <img  src={cakeImg}/>
        </div>
        
        <p id='catalogID'>Our Catalog</p>
        <div className='cake-types'>
            <div className='problem'>
             <a href=''>Traditional</a>
             <a href=''>Modern</a>
             <a href=''>Cake</a>
            </div>
        </div>
        
        <div className='sections'>
            <section className='section-carts'>
                <Cart props={ProductList[0]}/>
                <Cart props={ProductList[1]}/>
                <Cart props={ProductList[2]}/>
                <Cart props={ProductList[3]}/>
            </section>

            <div className='espace'>

            </div>
               
            <section className='section-carts'>
                <Cart props={ProductList[4]}/>
                <Cart props={ProductList[5]}/>
                <Cart props={ProductList[6]}/>
                <Cart props={ProductList[7]}/>
            </section>
        </div>

        <AboutUs/>
        </>
    )
}

export default Home