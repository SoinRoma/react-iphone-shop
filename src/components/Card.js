import React from 'react';

const Card = (props) => {
    console.log('card');
    return (
        <div className="card">
            <div className="favourite">
                <img src="./svg/heard-unlike.svg" alt="unlike"/>
            </div>
            <img src="./images/iphones/1.png" alt="sneaker1" width="133" />
            <h4>{props.title}</h4>
            <div className="d-flex justify-between align-center">
                <div className="card-price">
                    <p>Цена:</p>
                    <span>{props.price} руб.</span>
                </div>
                <button className="cu-p">
                    <img src="./svg/button-uncheck.svg" alt="uncheck" width="32" height="32"/>
                </button>
            </div>
        </div>
    );
};

export default Card;