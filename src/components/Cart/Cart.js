import {useContext} from "react"
import {AppContext} from "../../context"
import './Cart.scss'

const Cart = ({deleteCartItem}) => {
  const {cartItems,isCartOpen, setIsCartOpen} = useContext(AppContext)
  return (
    <div className={`overlay ${!isCartOpen && 'display-none-cart'}`}>
      <div className="drawer d-flex flex-column">
        <div className="drawer-top d-flex align-center justify-between">
          <h3>Корзина</h3>
          <button className="cu-p" onClick={() => setIsCartOpen(false)}>
            <img src="./svg/close.svg" alt="close"/>
          </button>
        </div>
        {cartItems.length ? (
            <div>
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
                <button>
                  <span>Оформить заказ</span>
                  <img src="./svg/arrow.svg" alt="arrow"/>
                </button>
              </div>
            </div>
          )
          :
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img className="mb-20" width="120px" src="./images/empty-cart.jpg" alt="Empty"/>
            <h2>Корзина пустая</h2>
            <p className="opacity-6">Добавьте хотя бы один товар!</p>
            <button className="greenButton" onClick={() => setIsCartOpen(false)}>
              <img src="./svg/arrow.svg" alt="Arrow"/>
              Вернуться назад
            </button>
          </div>
        }
      </div>
    </div>
  )
}

export default Cart
