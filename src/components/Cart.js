import './Cart.css'
import ShopImg from '../assets/Shopping-cart.png'
import ProductTable from './ProductTable'


const Cart = (props) =>{
    
const AddToCard = (event) =>{
    console.log('clicked!!!!!!!!!')
    console.log(event)
    const array = [props.image ,props.title ,props.paragraph , props.price]
    ProductTable(array)

}
    return(
        <div className='cart-container'>
          
            <img src={props.image} />
            <h2>{props.title}</h2>
            <p>{props.paragraph}</p>
            <div>
                <p>{props.price}</p>
                <div>
                     <button onClick={ AddToCard }>add to card </button>
                    <img src={ShopImg}/>
                </div>
            </div>

        </div>
    )

}

export default Cart