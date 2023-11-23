import React, {useState} from 'react';
import './Card.scss';
import axios from "axios";

const Card = ({item, setCartItems}) => {

  const [isAdded, setIsAdded] = useState(false)

  const handle = () => {
    setIsAdded((prevValue) => {
      if (prevValue) {
        axios.delete(`https://655de51b9f1e1093c59a1965.mockapi.io/api/cart/${item.id}`)
        setCartItems((prev) => [...prev.filter(i => i.id !== item.id)])
      } else {
        axios.post('https://655de51b9f1e1093c59a1965.mockapi.io/api/cart', item)
        setCartItems((prev) => [...new Set([...prev, item])])
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
