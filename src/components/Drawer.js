function Drawer({onClose, onRemove, items = [] }) {
    return (
        <div className="overlay">
         <div className="drawer">
          <h2 className="d-flex justify-between mb-30 " >Cart <img onClick={onClose} className="btn-remove cu-p" src="/img/btn-remove.svg" alt="Remove" /> </h2>
      
          {items.length > 0 ? ( 
            <div>
              <div className="items">
              {items.map((obj) => (
                <div className="cart-item d-flex align-center mb-20">
                  <div style={{ backgroundImage: `url(${obj.imageURl})` }} className="cart-item__img">
                  </div>
                <div className="mr-20 flex">
                  <p className="mb-5">{obj.title}</p>
                  <b>${obj.price}</b>
                </div>
                  <img 
                  onClick={() => onRemove(obj.id)}       className="btn-remove" 
                  src="/img/btn-remove.svg" 
                  alt="Remove" />
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
          ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img className="mb-20" width="120px" height="120px" src="/img/empty-cart.png" alt="emptyCart" />
            <h2>Cart Empty</h2>
           <p className="opacity-6">Added one sneakers for DONE</p> 
           <button onClick={onClose} className="greenButton">
              <img src="/img/back.png" alt="Arrow" width="22px" height="22px" /> Return back
           </button>
          </div>  
        )}
    
         
          
          </div>
         </div>
    )
}

export default Drawer;