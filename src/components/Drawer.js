import React from "react";
import axios from "axios";

import Info from "./Info";
import AppContext from '../context';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({onClose, onRemove, items = [] }) {
    const { cartItems, setCartItems } = React.useContext(AppContext);
    const [orderId, setOrderId] = React.useState(null);
    const [isOrderComplete, setIsOrderComplete] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const onClickOrder = async() => {
      try {
        setIsLoading(true);
        const {data} = await axios.post('https://62c6bb8174e1381c0a675522.mockapi.io/orders', {
          items: cartItems,
        });

        setOrderId(data.id);
        setIsOrderComplete(true);
        setCartItems([]);

        for (let i = 0; i < cartItems.length; i++) {
          const item = cartItems[i];
          await axios.delete('https://62c6bb8174e1381c0a675522.mockapi.io/cart', + item.id);
          await delay(1000);
        }

      } catch(error) {
        alert('ERROR!!!');
      }
      setIsLoading(false);
    };

    return (
        <div className="overlay">
         <div className="drawer">
          <h2 className="d-flex justify-between mb-30 " >Cart <img onClick={onClose} className="btn-remove cu-p" src="/img/btn-remove.svg" alt="Remove" /> </h2>
      
          {items.length > 0 ? ( 
            <div className="d-flex flex-column flex">
              <div className="items">
              {items.map((obj) => (
                <div key={obj.id} className="cart-item d-flex align-center mb-20">
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
             <button disabled={isLoading} onClick={onClickOrder} className="violent-button" >Сheckout <img className="violent-button__img" src="/img/arrow-right.svg" alt="arrow-right" /> </button>
           </div>
            </div>
          ) : (
            <Info 
              title={isOrderComplete ? "Checkout!" : "Cart Empty" }
              description={isOrderComplete ? `YOUR order ${orderId} is from POST` : "Added one sneakers for DONE"} 
              image={isOrderComplete ? "/img/confirm.png" : "/img/empty-cart.png"} /> 
        )}
        </div>
      </div>
    )
}

export default Drawer;