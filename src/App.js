import './assets/css/style.scss';

function App() {
  return (
    <div className="wrapper clear">
        <header className="d-flex justify-between align-center">
           <div className="d-flex align-center">
               <img src="./images/logo.png" alt="logo" width="40" height="40"/>
               <div className="header-info">
                   <h3 className="text-uppercase">React Sneakers</h3>
                   <p>Магазин лучших кроссовок</p>
               </div>
           </div>
            <ul className="header-right d-flex">
                <li className="d-flex align-center">
                    <img src="./svg/cart.svg" alt="cart"/>
                    <span>1205 руб.</span>
                </li>
                <li className="d-flex align-center">
                    <img src="./svg/like.svg" alt="like"/>
                </li>
                <li className="d-flex align-center">
                    <img src="./svg/user.svg" alt="user"/>
                </li>
            </ul>
        </header>
        <section className="content">
            <h1>Все кроссовки</h1>
            <div className="cards">
                ...
            </div>
        </section>
    </div>
  );
}

export default App;
