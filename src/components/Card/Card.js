import React, {useState} from 'react';
import './Card.scss';

const Card = (props) => {

  const [isAdded, setIsAdded] = useState(false)

  const handle = () => {
    setIsAdded((prevValue) => !prevValue)
  }

  return (
    <div className="card">
      <div className="favourite">
        <img src="./svg/heard-unlike.svg" alt="unlike"/>
      </div>
      <img src={props.imageUrl} alt="sneaker1" width="133"/>
      <h4>{props.title}</h4>
      <div className="d-flex justify-between align-center">
        <div className="card-price">
          <p>Цена:</p>
          <span>{props.price} руб.</span>
        </div>
        <img className="cu-p" src={isAdded ? './svg/button-check.svg' : './svg/button-uncheck.svg'} alt="uncheck"
             width="32" height="32" onClick={handle}/>
      </div>
    </div>
  );
};

export default Card;
