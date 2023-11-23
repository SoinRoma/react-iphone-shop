import './style.scss';
import axios from 'axios'
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import {useEffect, useState} from "react";

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
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

  const isItemAdded = (item) => {
    return cartItems.find((i) => +i.parentId === +item.id)
  }

  const deleteCartItem = async (id) => {
    await axios.delete(`https://655de51b9f1e1093c59a1965.mockapi.io/api/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }

  const getCartItems = async () => {
    const response = await axios.get('https://655de51b9f1e1093c59a1965.mockapi.io/api/cart')
    setCartItems(response.data)
  }

  useEffect(() => {
    getItems()
    getCartItems()
  }, [])

  return (
    <div className="wrapper clear">
      {isCartOpen && <Cart cartItems={cartItems} setIsCartOpen={setIsCartOpen} deleteCartItem={deleteCartItem}/>}
      <Header setIsCartOpen={setIsCartOpen}/>
      <section className="content">
        <div className="d-flex justify-between align-center">
          <h1>{search ? `Поиск по запросу: ${search}` : 'Все смартфоны'}</h1>
          <div className="search-block d-flex align-center">
            <label htmlFor="search-input" className="d-flex align-center cu-p">
              <img src="./svg/search.svg" alt="search"/>
            </label>
            {search &&
            <img src="./svg/close.svg" alt="close" className="clear cu-p" onClick={() => setSearch('')}/>
            }
            <input type="text" placeholder="Поиск..." id="search-input" value={search}
                   onChange={(e) => setSearch(e.target.value)}/>
          </div>
        </div>
        <div className="d-flex flex-wrap align-center cards">
          {items.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).map((item) =>
            <Card
              key={item.id}
              item={item}
              isItemAdded={isItemAdded}
              addCartItem={addCartItem}/>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
