import {useContext, useState} from "react"
import Card from "../components/Card/Card"
import CardLoading from "../components/CardLoading/CardLoading"
import {AppContext} from "../context"

function Home() {
  const [search, setSearch] = useState('')
  const {items, isLoading} = useContext(AppContext)

  const renderItems = () => {
    const filteredItems = items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    if (isLoading) {
      return [...Array(12)].map((item, index) => (<CardLoading key={index}/>))
    } else {
      return filteredItems.map((item) => (<Card key={item.id} item={item}/>))
    }
  }

  return (
    <section className="content">
      <div className="d-flex justify-between align-center flex-wrap">
        <h1 className="mb-25">{search ? `Поиск по запросу: ${search}` : 'Все смартфоны'}</h1>
        <div className="search-block d-flex align-center mb-5">
          <label htmlFor="search-input" className="d-flex align-center cu-p">
            <img src="./svg/search.svg" alt="search"/>
          </label>
          {search &&
          <img src="./svg/close.svg" alt="close" className="clear cu-p" onClick={() => setSearch('')}/>
          }
          <input type="text" placeholder="Поиск..." id="search-input" value={search}
                 onChange={(e) => setSearch(e.target.value)}/>
        </div>
      </div>
      <div className="d-flex flex-wrap align-center cards">
        {renderItems()}
      </div>
    </section>
  )
}

export default Home
