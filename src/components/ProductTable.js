
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
                    <td>  
                        <img src={panier.image}></img> 
                        <h3>{panier.title} </h3>
                        <p>{panier.paragraph}</p>
                        <a>Go to the product</a>
                    </td>
                    <td>Traditional</td>
                    <td>{panier.price}</td>
                    <td>1200</td>
                </tr>
            </table>


        </div>
    )
}

export default ProductTable