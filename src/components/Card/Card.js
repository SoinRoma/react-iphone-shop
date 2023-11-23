import './Card.scss';

const Card = ({item, isItemAdded, addCartItem}) => {
  const obj = {id: item.id, parentId: item.id, name: item.name, price: item.price, imageUrl: item.imageUrl}

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
        <img className="cu-p" src={isItemAdded(item) ? './svg/button-check.svg' : './svg/button-uncheck.svg'} alt="uncheck"
             width="32" height="32" onClick={() => addCartItem(obj)}/>
      </div>
    </div>
  );
};

export default Card;
