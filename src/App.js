import './style.scss';
import axios from 'axios'
import {Routes, Route} from 'react-router-dom'
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import {useEffect, useState} from "react";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [favorites, setFavorites] = useState([])
  const [search, setSearch] = useState('')
  const [isCartOpen, setIsCartOpen] = useState(false)

  const getItems = async () => {
    const response = await axios.get('https://655de51b9f1e1093c59a1965.mockapi.io/api/items')
    setItems(response.data)
  }

  const addCartItem = async (obj) => {
    const findItem = cartItems.find((item) => +item.parentId === +obj.id);
    if (findItem) {
      setCartItems((prev) => prev.filter((item) => +item.parentId !== +obj.id));
      await axios.delete(`https://655de51b9f1e1093c59a1965.mockapi.io/api/cart/${findItem.id}`);
    } else {
      setCartItems((prev) => [...prev, obj]);
      const {data} = await axios.post('https://655de51b9f1e1093c59a1965.mockapi.io/api/cart', obj)
      setCartItems((prev) =>
        prev.map((item) => {
          if (item.parentId === data.parentId) {
            return {
              ...item,
              id: data.id,
            };
          }
          return item;
        })
      );
    }
  }

  const isItemAdded = (obj) => {
    return cartItems.find((item) => +item.parentId === +obj.id)
  }

  const deleteCartItem = async (id) => {
    await axios.delete(`https://655de51b9f1e1093c59a1965.mockapi.io/api/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }

  const getCartItems = async () => {
    const response = await axios.get('https://655de51b9f1e1093c59a1965.mockapi.io/api/cart')
    setCartItems(response.data)
  }

  const toggleFavorite = (obj) => {
    if (favorites.find((i) => +i.id === +obj.id)) {
      setFavorites((prev) => [...prev.filter(item => item.id !== obj.id)])
    } else {
      setFavorites((prev) => [...prev, obj])
    }
  }

  const isItemFavorite = (obj) => {
    return favorites.find((item) => +item.id === +obj.id)
  }

  useEffect(() => {
    getItems()
    getCartItems()
  }, [])

  return (
    <div className="wrapper clear">
      {isCartOpen && <Cart cartItems={cartItems} setIsCartOpen={setIsCartOpen} deleteCartItem={deleteCartItem}/>}
      <Header setIsCartOpen={setIsCartOpen}/>
      <Routes>
        <Route path="/" element={<Home
          items={items}
          isItemAdded={isItemAdded}
          isItemFavorite={isItemFavorite}
          addCartItem={addCartItem}
          toggleFavorite={toggleFavorite}
          search={search}
          setSearch={setSearch}/>}/>
        <Route path="/favorites" element={<Favorites
          favorites={favorites}
          isItemAdded={isItemAdded}
          isItemFavorite={isItemFavorite}
          addCartItem={addCartItem}
          toggleFavorite={toggleFavorite}
        />}/>
      </Routes>
    </div>
  );
}

export default App;
