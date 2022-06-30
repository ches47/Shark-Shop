function Header()  {
    return ( 
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
    )
}

export default Header;