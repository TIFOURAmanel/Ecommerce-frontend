import './Cart.css'
import ShopImg from '../assets/Shopping-cart.png'
import ProductTable from './ProductTable'


const Cart = (props) =>{
    
const array = []
const AddToCard = () =>{
    console.log('clicked!!!!!!!!!')
     
        const product = {
        id : props.id ,
        image: props.image,
        title: props.title,
        paragraph: props.paragraph,
        price: props.price
    };

    array.push(product)
    
    localStorage.setItem('id' , JSON.stringify(array))
 

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