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

  const searchItems = (value) => {
    setSearch(value)
  }

  useEffect(() => {
    getItems()
  }, [])

  return (
    <div className="wrapper clear">
      {isCartOpen && <Cart setIsCartOpen={setIsCartOpen} cartItems={cartItems} setCartItems={setCartItems}/>}
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
                   onChange={(e) => searchItems(e.target.value)}/>
          </div>
        </div>
        <div className="d-flex flex-wrap align-center cards">
          {items.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).map((item) =>
            <Card item={item} key={item.id} cartItems={cartItems} setCartItems={setCartItems}/>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
