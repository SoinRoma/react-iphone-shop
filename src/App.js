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
  const [isLoading, setIsLoading] = useState(true)

  const getItems = async () => {
    try {
      const response = await axios.get('https://655de51b9f1e1093c59a1965.mockapi.io/api/items')
      setItems(response.data)
      setIsLoading(false)
    } catch (e) {
      alert(`Не удалось получить данные товаров. Ошибка: ${e}`)
    }
  }

  const addCartItem = async (obj) => {
    const findItem = cartItems.find((item) => +item.parentId === +obj.id);
    if (findItem) {
      try {
        await axios.delete(`https://655de51b9f1e1093c59a1965.mockapi.io/api/cart/${findItem.id}`);
        setCartItems((prev) => prev.filter((item) => +item.parentId !== +obj.id));
      } catch (e) {
        alert(`Не удалось удалить данные корзины. Ошибка: ${e}`)
      }
    } else {
      try {
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
      } catch (e) {
        alert(`Не удалось добавить данные в корзину. Ошибка: ${e}`)
      }
    }
  }

  const isItemAdded = (obj) => {
    return cartItems.find((item) => +item.parentId === +obj.id)
  }

  const deleteCartItem = async (id) => {
    try {
      await axios.delete(`https://655de51b9f1e1093c59a1965.mockapi.io/api/cart/${id}`)
      setCartItems((prev) => prev.filter(item => item.id !== id))
    } catch (e) {
      alert(`Не удалось удалить данные корзины. Ошибка: ${e}`)
    }
  }

  const getCartItems = async () => {
    try {
      const response = await axios.get('https://655de51b9f1e1093c59a1965.mockapi.io/api/cart')
      setCartItems(response.data)
    } catch (e) {
      alert(`Не удалось получить данные корзины. Ошибка: ${e}`)
    }
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
          isLoading={isLoading}
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
