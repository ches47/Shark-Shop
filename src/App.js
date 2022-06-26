
function App() {
  return (
    <div className="wrapper"> 
       <header className="d-flex justify-between">
        <div className="headerLeft d-flex align-center">
          <img src="img/shark_logo.png" alt="shark_logo" width="50px" height="50px" />
          <div className="headerInfo">
             <h3>Shark Shop</h3>
              <p>The Shop of sneakers</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
          <img src="img/Kors.svg" alt="Kors" width="18px" height="18px" />
            <span>55 $</span>
          </li>
          <li>
          <img src="img/favorite.svg" alt="favorite" width="18px" height="18px" />
          </li>
          <li>
          <img src="img/Union.svg" alt="Union" width="18px" height="18px" />
          </li>
        </ul>
       </header> 
       <div className="content">
        <h1>All sneakers</h1>
            ...
       </div>
    </div>
  );
}

export default App;
