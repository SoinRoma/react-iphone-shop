import {useContext} from "react"
import {AppContext} from "../../context"
import './Card.scss'
import {useCard} from "../../hooks/useCard"

const Card = ({item, isShowBtn = true}) => {
  const {addCartItem, toggleFavorite} = useContext(AppContext)
  const {isItemAdded, isItemFavorite} = useCard()
  const obj = {id: item.id, parentId: item.id, name: item.name, price: item.price, imageUrl: item.imageUrl}

  return (
    <div className="card">
      {isShowBtn && <div className="favourite" onClick={() => toggleFavorite(item)}>
        <img src={isItemFavorite(item) ? './svg/like.svg' : './svg/unlike.svg'} alt="like"/>
      </div>}
      <img src={item.imageUrl} alt="sneaker1" width="133"/>
      <h4>{item.name}</h4>
      <div className="d-flex justify-between align-center">
        <div className="card-price">
          <p>Цена:</p>
          <span>{item.price} руб.</span>
        </div>
        {isShowBtn &&
        <img className="cu-p" src={isItemAdded(item) ? './svg/button-check.svg' : './svg/button-uncheck.svg'}
             alt="uncheck" width="32" height="32" onClick={() => addCartItem(obj)}/>}
      </div>
    </div>
  )
}

export default Card
