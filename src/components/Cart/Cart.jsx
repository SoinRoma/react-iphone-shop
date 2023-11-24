import {useContext} from "react"
import {AppContext} from "../../context"
import './Cart.scss'
import Info from "../Info/Info"

const Cart = ({deleteCartItem}) => {
  const {cartItems, isCartOpen, isOrder, orderItems, closeCart, isDisable} = useContext(AppContext)

  return (
    <div className={`overlay ${!isCartOpen && 'display-none-cart'}`}>
      <div className="drawer d-flex flex-column">
        <div className="drawer-top d-flex align-center justify-between">
          <h3>Корзина</h3>
          <button className="cu-p" onClick={closeCart}>
            <img src="./svg/close.svg" alt="close"/>
          </button>
        </div>
        {cartItems.length ? (
            <div className="content-items">
              <div className="items">
                {cartItems.map(item =>
                  <div className="cart-item d-flex justify-between align-center" key={item.id}>
                    <img src={item.imageUrl} alt="sneakers" width="70"/>
                    <div className="cart-text">
                      <p> {item.name}</p>
                      <span>{item.price} руб.</span>
                    </div>
                    <button className="cu-p" onClick={() => deleteCartItem(item.id)}>
                      <img src="./svg/close.svg" alt="close"/>
                    </button>
                  </div>)}
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
                <button onClick={orderItems} disabled={isDisable} className="greenButton">
                  <span>Оформить заказ</span>
                  <img src="./svg/arrow.svg" alt="arrow"/>
                </button>
              </div>
            </div>
          )
          :
          <Info
            title={isOrder ? 'Заказ оформлен!' : 'Корзина пустая'}
            description={isOrder ? 'Ваш заказ скоро будет передан курьерской доставке' : 'Добавьте хотя бы один товар!'}
            img={isOrder ? 'order.png' : 'empty-cart.jpg'}/>
        }
      </div>
    </div>
  )
}

export default Cart
