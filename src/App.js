import './assets/css/style.scss';

function App() {
  return (
    <div className="wrapper clear">
        <header className="d-flex justify-between align-center">
           <div className="d-flex align-center">
               <a href="/">
                   <img src="./images/logo.png" alt="logo" width="40" height="40"/>
               </a>
               <div className="header-info">
                   <h3 className="text-uppercase">React Sneakers</h3>
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
            <h1>Все кроссовки</h1>
            <div className="d-flex flex-wrap align-center cards">
                <div className="card">
                    <img src="./images/sneakers/1.png" alt="sneaker1" width="133" height="112"/>
                    <h4>Мужские Кроссовки Nike Blazer Mid Suede</h4>
                    <div className="d-flex justify-between align-center">
                        <div className="card-price">
                            <p>Цена:</p>
                            <span>12 999 руб.</span>
                        </div>
                        <button className="cu-p">
                            <img src="./svg/plus.svg" alt="sneaker1" width="11" height="11"/>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img src="./images/sneakers/2.png" alt="sneaker1" width="133" height="112"/>
                    <h4>Мужские Кроссовки Nike Blazer Mid Suede</h4>
                    <div className="d-flex justify-between align-center">
                        <div className="card-price">
                            <p>Цена:</p>
                            <span>12 999 руб.</span>
                        </div>
                        <button className="cu-p">
                            <img src="./svg/plus.svg" alt="sneaker1" width="11" height="11"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default App;
