function Drawer () {
    return (
        <div style={{display: 'none'}} className="overlay">

        <div className="drawer">
          <h2 className="d-flex justify-between mb-30 " >Cart <img className="btn-remove cu-p" src="/img/btn-remove.svg" alt="Remove" /> </h2>

            <div className="items">
              <div className="cart-item d-flex align-center mb-20">
              <div style={{ backgroundImage: 'url(/img/sneakers/sneakers_1.jpg'}} className="cart-item__img">
           
             </div>
              <div className="mr-20 flex">
              <p className="mb-5">Puma X Aka Boku Future Rider</p>
              <b>120$</b>
            </div>
            <img className="btn-remove" src="/img/btn-remove.svg" alt="Remove" />
              </div>

              <div className="cart-item d-flex align-center mb-20">
            <div style={{ backgroundImage: 'url(/img/sneakers/sneakers_2.jpg'}} className="cart-item__img">
           
            </div>
            <div className="mr-20 flex">
              <p className="mb-5">Nike Blazer Mid Suede</p>
              <b>120$</b>
            </div>
            <img className="btn-remove" src="/img/btn-remove.svg" alt="Remove" />
              </div>





            </div>
    
          <div className="card-total__block">
            <ul>
              <li>
                <span>Summative: </span>
                <div></div>
                <b>240 $ </b>
              </li>
              <li className="d-flex">
                <span>Tax 5%: </span>
                <div>  </div>
                <b>6 $</b>
              </li>
            </ul>
            <button className="violent-button" >Сheckout <img className="violent-button__img" src="/img/arrow-right.svg" alt="arrow-right" /> </button>
          </div>
          
          </div>
         </div>
    )
}

export default Drawer;