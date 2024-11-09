import TableElements from "./TableElements"

const ProductTable = (array) =>{

   const basket = localStorage.getItem('id')
   const panier = JSON.parse(basket) 

    return(
        <div>
            <h1>Shopping card items</h1>
            <table>
                <tr>
                    <th>Product</th>
                    <th>Catgories</th>
                    <th>Amount</th>
                    <th>Price</th>
                </tr>
                <tr>
                   
                        {panier.map((produit) => (<TableElements  image = {produit.image}  title = {produit.title}  paragraph = {produit.paragraph} price = {produit.price}/> ))}
                        
                        <a>Go to the product</a>
                   
                    <td>Traditional</td>
                    <td>{panier.price}</td>
                    <td>1200</td>
                </tr>
            </table>


        </div>
    )
}

export default ProductTable