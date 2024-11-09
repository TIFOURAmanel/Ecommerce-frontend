


const TableElements = (pro) =>{
    return(
        <div>
            <td>
             <img src={pro.image}></img> 
             <h3>{pro.title} </h3>
             <p>{pro.paragraph}</p>
            </td>
        </div>
    )
}


export default TableElements