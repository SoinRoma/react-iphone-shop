import React from 'react';
import './Cart.scss';

const Cart = ({cartItems=[], setCartItems, setIsCartOpen}) => {
    const deleteItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id))
    }
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
                    {cartItems.map(item =>
                      <div className="cart-item d-flex justify-between align-center" key={item.id}>
                          <img src={item.imageUrl} alt="sneakers" width="70"/>
                          <div className="cart-text">
                              <p> {item.name}</p>
                              <span>{item.price} руб.</span>
                          </div>
                          <button className="cu-p" onClick={()=> deleteItem(item.id)}>
                              <img src="./svg/close.svg" alt="close"/>
                          </button>
                      </div>
                    )}
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
