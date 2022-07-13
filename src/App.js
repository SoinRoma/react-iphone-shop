import './assets/css/style.scss';

function App() {
    return (
        <div className="wrapper clear">
            <div className="overlay">
                <div className="drawer d-flex flex-column">
                    <h3>Корзина</h3>
                    <div className="items">
                        <div className="cart-item d-flex justify-between align-center">
                            <img src="./images/sneakers/1.png" alt="sneakers" width="70" height="70"/>
                            <div className="cart-text">
                                <p>
                                    Мужские Кроссовки Nike Air Max 270
                                </p>
                                <span>
                            12 999 руб.
                        </span>
                            </div>
                            <button className="cu-p">
                                <img src="./svg/close.svg" alt="close"/>
                            </button>
                        </div>
                    </div>
                    <div className="drawer-bottom">
                        <ul>
                            <li className="d-flex justify-between align-end">
                                <p>Итого:</p>
                                <div/>
                                <b>21 498 руб.</b>
                            </li>
                            <li className="d-flex justify-between align-end">
                                <p>Налог 5%:</p>
                                <div/>
                                <b>1074 руб.</b>
                            </li>
                        </ul>
                        <button>
                            <span>Оформить заказ</span>
                            <img src="./svg/arrow.svg" alt="arrow"/>
                        </button>
                    </div>
                </div>
            </div>
            <header className="d-flex justify-between align-center">
                <div className="d-flex align-center">
                    <a href="/">
                        <img src="./images/logo.png" alt="logo" width="40" height="40"/>
                    </a>
                    <div className="header-info">
                        <h3 className="text-uppercase">Sneakers Shop</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
                <ul className="header-right d-flex">
                    <li className="d-flex align-center">
                        <a href="/">
                            <img src="./svg/cart.svg" alt="cart"/>
                        </a>
                        <span>1205 руб.</span>
                    </li>
                    <li className="d-flex align-center">
                        <a href="/">
                            <img src="./svg/like.svg" alt="like"/>
                        </a>
                    </li>
                    <li className="d-flex align-center">
                        <a href="/">
                            <img src="./svg/user.svg" alt="user"/>
                        </a>
                    </li>
                </ul>
            </header>
            <section className="content">
                <div className="d-flex justify-between align-center">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex align-center">
                        <label htmlFor="search-input" className="d-flex align-center cu-p">
                            <img src="./svg/search.svg" alt="search"/>
                        </label>
                        <input type="text" placeholder="Поиск..." id="search-input"/>
                    </div>
                </div>
                <div className="d-flex flex-wrap align-center cards">
                    <div className="card">
                        <div className="favourite">
                            <img src="./svg/heard-unlike.svg" alt="unlike"/>
                        </div>
                        <img src="./images/sneakers/1.png" alt="sneaker1" width="133" height="112"/>
                        <h4>Мужские Кроссовки Nike Blazer Mid Suede</h4>
                        <div className="d-flex justify-between align-center">
                            <div className="card-price">
                                <p>Цена:</p>
                                <span>12 999 руб.</span>
                            </div>
                            <button className="cu-p">
                                <img src="./svg/button-uncheck.svg" alt="uncheck" width="32" height="32"/>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
