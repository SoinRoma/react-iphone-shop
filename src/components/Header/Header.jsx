import {useContext} from "react"
import {Link} from "react-router-dom"
import './Header.scss'
import {AppContext} from "../../context"

const Header = () => {
    const {totalPrice, setIsCartOpen} = useContext(AppContext)
    return (
        <header className="d-flex justify-between align-center flex-wrap">
            <Link to="/">
                <div className="d-flex align-center mb-20">
                    <img src="./images/logo.png" alt="logo" width="40" height="40"/>
                    <div className="header-info">
                        <h3 className="text-uppercase">Iphone Shop</h3>
                        <p>Магазин лучших смартфонов</p>
                    </div>
                </div>
            </Link>
            <ul className="header-right d-flex">
                <li className="d-flex align-center cu-p" onClick={()=> setIsCartOpen(true)}>
                    <img src="./svg/cart.svg" alt="cart"/>
                    <span>{totalPrice() > 0 ? `${totalPrice()} руб.` : ''}</span>
                </li>
                <li className="d-flex align-center">
                    <Link to="/favorites">
                        <img src="./svg/unlike.svg" alt="like"/>
                    </Link>
                </li>
                <li className="d-flex align-center">
                    <Link to="/order">
                        <img src="./svg/user.svg" alt="user"/>
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header
