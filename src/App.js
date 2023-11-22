import './style.scss';
import axios from 'axios'
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import {useEffect, useState} from "react";

function App() {
    const [items, setItems] = useState([])
    const [isCartOpen, setIsCartOpen] = useState(false)

    const getItems = async () => {
        const response = await axios.get('https://655de51b9f1e1093c59a1965.mockapi.io/api/items')
        setItems(response.data)
    }

    useEffect(()=>{
        getItems()
    }, [])

    return (
        <div className="wrapper clear">
            {isCartOpen && <Cart setIsCartOpen={setIsCartOpen}/>}
            <Header setIsCartOpen={setIsCartOpen}/>
            <section className="content">
                <div className="d-flex justify-between align-center">
                    <h1>Все смартфоны</h1>
                    <div className="search-block d-flex align-center">
                        <label htmlFor="search-input" className="d-flex align-center cu-p">
                            <img src="./svg/search.svg" alt="search"/>
                        </label>
                        <input type="text" placeholder="Поиск..." id="search-input"/>
                    </div>
                </div>
                <div className="d-flex flex-wrap align-center cards">
                    {items.map((item) =>
                        <Card title={item.name} price={item.price} imageUrl={item.imageUrl} key={item.id} />
                    )}
                </div>
            </section>
        </div>
    );
}

export default App;
