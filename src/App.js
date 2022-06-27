
function App() {
  return (
    <div className="wrapper clear"> 
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
        <h1 className="mb-40">All sneakers</h1>

       <div className="sneakers-blocks d-flex"> 
        <div className="card">
          <img src="/img/sneakers/sneakers_1.jpg" alt="sneakers_1" width="123px" height="112px" />
          <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
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
          <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
          <div className="d-flex justify-between ">
           <div className="d-flex flex-column ">
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
          <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
          <div className="d-flex justify-between ">
           <div className="d-flex flex-column ">
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
          <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
          <div className="d-flex justify-between ">
           <div className="d-flex flex-column ">
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
