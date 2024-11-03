import './Cart.css'
import ShopImg from '../assets/Shopping-cart.png'


const Cart = (props) =>{
    return(
        <div className='cart-container'>
            <img src={props.image} />
            <h2>{props.title}</h2>
            <p>{props.paragraph}</p>
            <div>
                <p>{props.price}</p>
                <div>
                    <a href=''>add to card</a>
                    <img src={ShopImg}/>
                </div>
            </div>

        </div>
    )
}

export default Cart