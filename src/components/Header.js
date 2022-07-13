import { Link } from 'react-router-dom';

function Header(props)  {
    return ( 
     <header className="d-flex justify-between align-center p-20">
      <Link to="/">
       <div className="headerLeft d-flex align-center">
         <img src="img/shark_logo.png" alt="shark_logo" width="50px" height="50px" />
         <div >
           <h3 className="title text-uppercase" >Shark Shop</h3>
             <p className="mt-0 opacity-5">The Shop of sneakers</p>
         </div>
       </div>
      </Link>
       <ul className="headerRight d-flex ">
         <li onClick={props.onClickCart} className="mr-30 cu-p">
         <img src="img/Kors.svg" alt="Cart" width="18px" height="18px" />
           <span className="ml-10">55 $</span>
         </li>
         <li className="mr-20 cu-p">
            <Link to="/favorites">
              <img src="img/favorite.svg" alt="favorite" width="18px" height="18px" />
            </Link>
         </li>
         <li>
         <img src="img/Union.svg" alt="Union" width="18px" height="18px" />
         </li>
       </ul>
      </header> 
    )
}

export default Header;