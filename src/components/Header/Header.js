import React from 'react';
import './Header.scss';

const Header = ({setIsCartOpen}) => {
    return (
        <header className="d-flex justify-between align-center">
            <div className="d-flex align-center">
                <a href="/">
                    <img src="./images/logo.png" alt="logo" width="40" height="40"/>
                </a>
                <div className="header-info">
                    <h3 className="text-uppercase">Iphone Shop</h3>
                    <p>Магазин лучших смартфонов</p>
                </div>
            </div>
            <ul className="header-right d-flex">
                <li className="d-flex align-center cu-p" onClick={()=> setIsCartOpen(true)}>
                    <img src="./svg/cart.svg" alt="cart"/>
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
    );
};

export default Header;
