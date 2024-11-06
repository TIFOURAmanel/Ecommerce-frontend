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
          
            <img src={props.image} width= "272.39px"  height ="220px"/>
            <h2>{props.title}</h2>
            <p>{props.paragraph}</p>
            <div className='div-flex'>
                <p>{props.price}</p>
                <div>
                     <button onClick={ () =>{AddToCard() ; alert(`${props.title} added to card`)}}>add to card </button>
                    <img src={ShopImg}/>
                </div>
            </div>

        </div>
    )

}

export default Cart