
function App() {
  return (
    <div className="wrapper clear"> 
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


       <header className="d-flex justify-between align-center p-20">
        <div className="headerLeft d-flex align-center">
          <img src="img/shark_logo.png" alt="shark_logo" width="50px" height="50px" />
          <div >
             <h3 className="title text-uppercase" >Shark Shop</h3>
              <p className="mt-0 opacity-5">The Shop of sneakers</p>
          </div>
        </div>
        <ul className="headerRight d-flex ">
          <li className="mr-30">
          <img src="img/Kors.svg" alt="Kors" width="18px" height="18px" />
            <span className="ml-10">55 $</span>
          </li>
          <li className="mr-30">
          <img src="img/favorite.svg" alt="favorite" width="18px" height="18px" />
          </li>
          <li>
          <img src="img/Union.svg" alt="Union" width="18px" height="18px" />
          </li>
        </ul>
       </header> 
       <div className="content p-40">
        <div className="d-flex align-center justify-between  mb-40">
        <h1>All sneakers</h1>
        <div className="search-block d-flex">
          <img src="/img/search.png" alt="search" />
          <input placeholder="Search..." />
        </div>
        </div>

       <div className="sneakers-blocks d-flex"> 
        <div className="card">
          <div className="card-favorite">
          <img src="/img/heart-unliked.svg" alt="heart-unliked" />
          </div>
          <img src="/img/sneakers/sneakers_1.jpg" alt="sneakers_1" width="123px" height="112px" />
          <h5>Puma X Aka Boku Future Rider</h5>
          <div className="block ">
           <div className="d-flex ">
            <span >Price:</span>
            <b>120 $</b>
            <button className="ml-40 card-button ">
                <img src="img/plus.svg" alt="plus" width="21px" height="21px" />
            </button>
           </div>
          </div>
        </div>

        <div className="card">
          <img src="/img/sneakers/sneakers_2.jpg" alt="sneakers_2" width="123px" height="112px" />
          <h5>Nike Blazer Mid Suede</h5>
          <div className="block ">
           <div className="d-flex ">
            <span >Price:</span>
            <b>120 $</b>
            <button className="ml-40 card-button ">
                <img src="img/plus.svg" alt="plus" width="21px" height="21px" />
            </button>
           </div>
          </div>
        </div>

        <div className="card">
          <img src="/img/sneakers/sneakers_3.jpg" alt="sneakers_3" width="123px" height="112px" />
          <h5> Nike Air Max 270</h5>
          <div className="block ">
           <div className="d-flex ">
            <span >Price:</span>
            <b>120 $</b>
            <button className="ml-40 card-button ">
                <img src="img/plus.svg" alt="plus" width="21px" height="21px" />
            </button>
           </div>
          </div>
        </div>

        <div className="card">
          <img src="/img/sneakers/sneakers_4.jpg" alt="sneakers_4" width="123px" height="112px" />
          <h5>Nike Blazer Mid Suede</h5>
          <div className="block ">
           <div className="d-flex ">
            <span >Price:</span>
            <b>120 $</b>
            <button className="ml-40 card-button ">
                <img src="img/plus.svg" alt="plus" width="21px" height="21px" />
            </button>
           </div>
          </div>
        </div>

       </div>
      </div> 

    </div>
  );
}

export default App;
