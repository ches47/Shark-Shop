import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import AppContext from './context';

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
  const [isLoading, setIsLoading]  = React.useState(true);
  
  React.useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get('https://62c6bb8174e1381c0a675522.mockapi.io/cart');
      const favoritesResponse = await axios.get('https://62c6bb8174e1381c0a675522.mockapi.io/favorites');
      const itemsResponse = await axios.get('https://62c6bb8174e1381c0a675522.mockapi.io/items');
    
      setIsLoading(false);

      setItems(itemsResponse.data);
      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
    }

    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    console.log(obj);
    if(cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://62c6bb8174e1381c0a675522.mockapi.io/cart/${obj.id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id) ));
    } else {
      axios.post('https://62c6bb8174e1381c0a675522.mockapi.io/cart', obj);
      setCartItems((prev) => [...prev, obj]);
      }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://62c6bb8174e1381c0a675522.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if(favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://62c6bb8174e1381c0a675522.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) =>prev.filter((item) => Number(item.id) !== Number(obj.id)));
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

  const isItemAdded = (id) => {
    return cartItems.some(obj => Number(obj.id) === Number(id))
  }

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded,onAddToFavorite, setCartOpened, setCartItems }}>
      <div className="wrapper clear"> 
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} /> }
      <Header onClickCart={() => setCartOpened(true)} /> 

        <Route path="/" exact>
           <Home 
                items={items} 
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}  
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
          />
        </Route>

        <Route path="/favorites" exact>
           <Favorites onAddToFavorite={onAddToFavorite} />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
