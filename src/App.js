import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
// const ARR = 
  // [
    // {
    //  "title": "Puma X Aka Boku Future Rider",
    //  "price": 120, 
    //  "imageURl": "/img/sneakers/sneakers_1.jpg",
    // },
    // {
    //  "title": "Nike Yellow Blazer Mid Suede",
    //  "price": 150, 
    //  "imageURl": "/img/sneakers/sneakers_2.jpg",
    // },
    // {
    //  "title": "Nike Air Max 270 Maximum",
    //  "price": 170, 
    //  "imageURl": "/img/sneakers/sneakers_3.jpg",
    // },
    // {
    //  "title": "Nike B Old schol Junior 360 Dali",
    //  "price": 180, 
    //  "imageURl": "/img/sneakers/sneakers_4.jpg",
    // },
    // {
    //  "title": "Puma X aka Elijah Stracke",
    //  "price": 200, 
    //  "imageURl": "/img/sneakers/sneakers_5.jpg",
    // },
    // {
    //  "title": "Nike Krisy Mercedes Wisozk",
    //  "price": 220, 
    //  "imageURl": "/img/sneakers/sneakers_6.jpg",
    // },
    // {
    //  "title": "Nike LeBron6 Ms. Bryan Marquardt",
    //  "price": 250, 
    //  "imageURl": "/img/sneakers/sneakers_7.jpg",
    // },
    // {
    //  "title": "Nike Ms. Bryan Marquard",
    //  "price": 300, 
    //  "imageURl": "/img/sneakers/sneakers_8.jpg",
    // }
// ];

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened]  = React.useState(false);

  React.useEffect(() => {
    axios.get('https://62c6bb8174e1381c0a675522.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://62c6bb8174e1381c0a675522.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
    axios.get('https://62c6bb8174e1381c0a675522.mockapi.io/favorites').then((res) => {
      setFavorites(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://62c6bb8174e1381c0a675522.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://62c6bb8174e1381c0a675522.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if(favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://62c6bb8174e1381c0a675522.mockapi.io/favorites/${obj.id}`);
      } else {
        const { data } = await axios.post('https://62c6bb8174e1381c0a675522.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, data]);
      }
   } catch(error) {
    alert('NOT ADDED TO ON FAV')
   }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);

  };

  return (
    <div className="wrapper clear"> 
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} /> }
      <Header onClickCart={() => setCartOpened(true)} /> 

        <Route path="/" exact>
           <Home 
                items={items} 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}  
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
          />
        </Route>

        <Route path="/favorites" exact>
           <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
        </Route>
    </div>
  );
}

export default App;
