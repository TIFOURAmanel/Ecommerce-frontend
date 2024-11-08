import './Summary.css'

const Summary =() =>{
return(
    <div className='Summary_container'>
      <h2>Summary</h2>
      <hr/>
      <div>
        <p>Total products :</p>
        <button className='add_button'>Add promo code </button>
        <hr/>
        <p>Total :</p>
        <button className='check_button'>check out</button>

      </div>
    </div>
)
}

export default Summary