import './assets/css/style.scss';
import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
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
                    <Card/>
                </div>
            </section>
        </div>
    );
}

export default App;
