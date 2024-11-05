
const ProductTable = (array) =>{
    return(
        <div>
            <table>
                <tr>
                    <th>Produits</th>
                    <th>Catgories</th>
                    <th>Amount</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>  
                        <img>{array[0]}</img> 
                        <h3>{array[1]} </h3>
                        <p>{array[2]}</p>
                        <a>Go to the product</a>
                    </td>
                    <td>Traditional</td>
                    <td>{array[3]}</td>
                    <td>1200</td>
                </tr>
            </table>


        </div>
    )
}

export default ProductTable