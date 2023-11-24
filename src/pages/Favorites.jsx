import {useContext} from "react"
import {Link} from "react-router-dom"
import {AppContext} from "../context"
import Card from "../components/Card/Card"

function Favorites() {
  const {favorites} = useContext(AppContext)

  return (
    <section className="content">
      <div className="d-flex align-center">
        <Link to="/" className="btn-back">
          <img src="./svg/btn-back.svg" alt="back"/>
        </Link>
        <h1>Мои закладки</h1>
      </div>
      <div>
        {favorites.length ?
          <div className="d-flex flex-wrap align-center cards">
            {favorites.map((item) => <Card key={item.id} item={item}/>)}
          </div>
          :
          <div className="d-flex flex-column justify-center align-center mt-50">
            <img className="mb-20" width="120px" src="./images/emoji.png" alt="emoji"/>
            <h3 className="empty-title">Список пуст!</h3>
            <p className="empty-subtitle">Вы ничего не добавляли в закладки</p>
            <Link to="/" className="greenButton">
              <img src="./svg/arrow.svg" alt="Arrow"/>
              Вернуться назад
            </Link>
          </div>
        }
      </div>
    </section>
  )
}

export default Favorites
