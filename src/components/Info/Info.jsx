import {useContext} from "react"
import {AppContext} from "../../context"

function Info({title, description, img}) {
  const {closeCart} = useContext(AppContext)
  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" width="120px" src={`./images/${img}`} alt="Empty"/>
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button className="greenButton" onClick={closeCart}>
        <img src="./svg/arrow.svg" alt="Arrow"/>
        Вернуться назад
      </button>
    </div>
  )
}

export default Info
