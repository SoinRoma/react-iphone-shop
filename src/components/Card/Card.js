import React, {useState} from 'react';
import './Card.scss';

const Card = ({item, cartItems, setCartItems}) => {

  const [isAdded, setIsAdded] = useState(false)

  const handle = () => {
    setIsAdded((prevValue) => {
      if (prevValue) {
        setCartItems([...cartItems.filter(i => i.id !== item.id)])
      } else {
        const setArray = new Set([...cartItems, item])
        setCartItems([...setArray])
      }
      return !prevValue;
    })
  }

  return (
    <div className="card">
      <div className="favourite">
        <img src="./svg/heard-unlike.svg" alt="unlike"/>
      </div>
      <img src={item.imageUrl} alt="sneaker1" width="133"/>
      <h4>{item.name}</h4>
      <div className="d-flex justify-between align-center">
        <div className="card-price">
          <p>Цена:</p>
          <span>{item.price} руб.</span>
        </div>
        <img className="cu-p" src={isAdded ? './svg/button-check.svg' : './svg/button-uncheck.svg'} alt="uncheck"
             width="32" height="32" onClick={handle}/>
      </div>
    </div>
  );
};

export default Card;
