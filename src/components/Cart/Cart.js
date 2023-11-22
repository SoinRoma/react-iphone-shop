import React from 'react';
import './Cart.scss';

const Cart = ({setIsCartOpen}) => {
    return (
        <div className="overlay">
            <div className="drawer d-flex flex-column">
                <div className="drawer-top d-flex align-center justify-between">
                    <h3>Корзина</h3>
                    <button className="cu-p" onClick={()=> setIsCartOpen(false)}>
                        <img src="./svg/close.svg" alt="close"/>
                    </button>
                </div>
                <div className="items">
                    <div className="cart-item d-flex justify-between align-center">
                        <img src="./images/iphones/1.png" alt="sneakers" width="70"/>
                        <div className="cart-text">
                            <p>
                                Iphone 13 Pro Max
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
    );
};

export default Cart;
