import React from 'react';
import './Header.scss';
import {Link} from "react-router-dom";

const Header = ({setIsCartOpen}) => {
    return (
        <header className="d-flex justify-between align-center">
            <Link to="/">
                <div className="d-flex align-center">
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
                    <span>1205 руб.</span>
                </li>
                <li className="d-flex align-center">
                    <Link to="/favorites">
                        <img src="./svg/unlike.svg" alt="like"/>
                    </Link>
                </li>
                <li className="d-flex align-center">
                    <a href="/">
                        <img src="./svg/user.svg" alt="user"/>
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default Header;
