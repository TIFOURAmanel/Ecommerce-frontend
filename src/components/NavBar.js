import './NavBar.css'
import NameImg from '../assets/Name.png'
import shocartImg from '../assets/Buying.png'



const NavBar = () => {
    return (
        
        <div className='nav-container'>
         <nav className='nav-bar'>
            <img src={NameImg}/>
            <input className='search' type='search' placeholder='      Search...' />
            <a className='nav-links' href=''>Home</a>
            <a className='nav-links' href='#catalogID'>Catalog</a>
            <a className='nav-links' href='#About-us'>About Us</a>
            <a className='nav-links' href=''> <img src={shocartImg}/> Basket </a>
         </nav>

        </div>
        
    )
}

export default NavBar

