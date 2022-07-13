import './assets/css/style.scss';

function App() {
  return (
    <div className="wrapper">
        <header className="d-flex">
           <div className="header-left">
               <img src="./images/logo.png" alt="logo" width="40" height="40"/>
               <div className="header-info">
                   <h3>React Sneakers</h3>
                   <p>Магазин лучших кроссовок</p>
               </div>
           </div>
            <ul className="header-right">
                <li>
                    <svg></svg>
                    <span>1205 руб.</span>
                </li>
                <li>
                    <svg></svg>
                </li>
            </ul>
        </header>
        <div className="content">
            <h1>Все кроссовки</h1>
            <div className="cards">
                ...
            </div>
        </div>
    </div>
  );
}

export default App;
