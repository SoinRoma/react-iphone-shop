import {useEffect, useState} from "react"
import {Routes, Route} from 'react-router-dom'
import axios from 'axios'

import './style.scss'
import Header from "./components/Header/Header"
import Cart from "./components/Cart/Cart"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import Order from "./pages/Order"
import {AppContext} from "./context"

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [favorites, setFavorites] = useState([])
  const [orders, setOrders] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isOrder, setIsOrder] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isDisable, setIsDisable] = useState(false)

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
    const findItem = cartItems.find((item) => +item.parentId === +obj.id)
    if (findItem) {
      try {
        await axios.delete(`https://655de51b9f1e1093c59a1965.mockapi.io/api/cart/${findItem.id}`)
        setCartItems((prev) => prev.filter((item) => +item.parentId !== +obj.id))
      } catch (e) {
        alert(`Не удалось удалить данные корзины. Ошибка: ${e}`)
      }
    } else {
      try {
        setCartItems((prev) => [...prev, obj])
        const {data} = await axios.post('https://655de51b9f1e1093c59a1965.mockapi.io/api/cart', obj)
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              }
            }
            return item
          })
        )
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

  const closeCart = () => {
    setIsCartOpen(false)
    setIsOrder(false)
  }

  const orderItems = async () => {
    try {
      setIsDisable(true)
      setOrders((prev) => [...prev, {id: Date.now(), items: [...cartItems]}])
      for (let i = 0; i < cartItems.length; i++) {
        const id = cartItems[i].id
        await axios.delete(`https://655de51b9f1e1093c59a1965.mockapi.io/api/cart/${id}`)
        await new Promise(resolve => setTimeout(resolve, 500))
      }
      setCartItems([])
      setIsOrder(true)
      setIsDisable(false)
    } catch (e) {
      alert(`Не удалось заказать товары. Ошибка: ${e}`)
    }
  }

  useEffect(() => {
    getItems()
    getCartItems()
  }, [])

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        orders,
        isLoading,
        isCartOpen,
        setIsCartOpen,
        isOrder,
        isDisable,
        addCartItem,
        isItemAdded,
        toggleFavorite,
        isItemFavorite,
        orderItems,
        closeCart
      }}>
      <div className="wrapper clear">
        <Cart deleteCartItem={deleteCartItem}/>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/order" element={<Order/>}/>
        </Routes>
      </div>
    </AppContext.Provider>
  )
}

export default App
