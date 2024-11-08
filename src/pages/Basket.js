import ProductTable from '../components/ProductTable'
import Summary from '../components/Summary'
import './Basket.css'

const Basket = () =>{
    return(
        <div className='Basket_container'>
           <ProductTable/> 
           <Summary/>

        </div>
    )
}

export default Basket