import React from 'react';
import './Card.scss';

const Card = (props) => {

    const onClickButtonPlus = () => {
        alert(props.title)
    };

    return (
        <div className="card">
            <div className="favourite">
                <img src="./svg/heard-unlike.svg" alt="unlike"/>
            </div>
            <img src={props.imageUrl} alt="sneaker1" width="133" />
            <h4>{props.title}</h4>
            <div className="d-flex justify-between align-center">
                <div className="card-price">
                    <p>Цена:</p>
                    <span>{props.price} руб.</span>
                </div>
                <button className="cu-p" onClick={onClickButtonPlus}>
                    <img src="./svg/button-uncheck.svg" alt="uncheck" width="32" height="32"/>
                </button>
            </div>
        </div>
    );
};

export default Card;