import './assets/css/style.scss';
import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {

    const arr = [
        {name: 'Iphone 13 Pro Max', price: '12000'},
        {name: 'Iphone 13 Pro', price: '11000'},
        {name: 'Iphone 13', price: '10000'},
        {name: 'Iphone 13 Mini', price: '9000'},
    ];

    return (
        <div className="wrapper clear">
            <Cart/>
            <Header/>
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
                    {arr.map((value, index) =>
                        <Card title={value.name} price={value.price} key={index} />
                    )}

                </div>
            </section>
        </div>
    );
}

export default App;
