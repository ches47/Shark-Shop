function Drawer({onClose, items = [] }) {
    return (
        <div className="overlay">
         <div className="drawer">
          <h2 className="d-flex justify-between mb-30 " >Cart <img onClick={onClose} className="btn-remove cu-p" src="/img/btn-remove.svg" alt="Remove" /> </h2>

            <div className="items">
              {items.map((obj) => (
                <div className="cart-item d-flex align-center mb-20">
                  <div style={{ backgroundImage: `url(${obj.imageURl})` }} className="cart-item__img">
             
                  </div>
                <div className="mr-20 flex">
                  <p className="mb-5">{obj.title}</p>
                  <b>${obj.price}</b>
                </div>
                  <img className="btn-remove" src="/img/btn-remove.svg" alt="Remove" />
                </div>
              ))}
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