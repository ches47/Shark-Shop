import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
// const ARR = 
  // [
  //   {
  //    "title": "Puma X Aka Boku Future Rider",
  //    "price": 120, 
  //    "imageURl": "/img/sneakers/sneakers_1.jpg",
  //   },
  //   {
  //    "title": "Nike Yellow Blazer Mid Suede",
  //    "price": 150, 
  //    "imageURl": "/img/sneakers/sneakers_2.jpg",
  //   },
  //   {
  //    "title": "Nike Air Max 270 Maximum",
  //    "price": 170, 
  //    "imageURl": "/img/sneakers/sneakers_3.jpg",
  //   },
  //   {
  //    "title": "Nike B Old schol Junior 360 Dali",
  //    "price": 180, 
  //    "imageURl": "/img/sneakers/sneakers_4.jpg",
  //   },
  //   {
  //    "title": "Puma X aka Elijah Stracke",
  //    "price": 200, 
  //    "imageURl": "/img/sneakers/sneakers_5.jpg",
  //   },
  //   {
  //    "title": "Nike Krisy Mercedes Wisozk",
  //    "price": 220, 
  //    "imageURl": "/img/sneakers/sneakers_6.jpg",
  //   },
  //   {
  //    "title": "Nike LeBron6 Ms. Bryan Marquardt",
  //    "price": 250, 
  //    "imageURl": "/img/sneakers/sneakers_7.jpg",
  //   },
  //   {
  //    "title": "Nike Ms. Bryan Marquard",
  //    "price": 300, 
  //    "imageURl": "/img/sneakers/sneakers_8.jpg",
  //   }
// ];

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened]  = React.useState(false);

  React.useEffect(() => {
    fetch('https://62c6bb8174e1381c0a675522.mockapi.io/items').then(res => {
      return res.json();
    }).then(json => {
      setItems(json);
    });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  }

  return (
    <div className="wrapper clear"> 
      {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)} /> : null}
      <Header onClickCart={() => setCartOpened(true)} /> 

       <div className="content p-40">
        <div className="d-flex align-center justify-between  mb-40">
        <h1>All sneakers</h1>
        <div className="search-block d-flex">
          <img src="/img/search.png" alt="search" />
          <input placeholder="Search..." />
        </div>
        </div>

       <div className="sneakers-blocks d-flex flex-wrap"> 
          {items.map((item, index) => (
            <Card 
                key={index}
                title={item.title}
                price={item.price}
                imageURl={item.imageURl}
                onClickFavorite={() => console.log('Added Fav')}
                onPlus={(obj) => onAddToCart(item)}
            />
          ))}

       </div>
      </div>  

    </div>
  );
}

export default App;
