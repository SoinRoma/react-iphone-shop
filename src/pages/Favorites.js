import Card from "../components/Card/Card";

function Favorites({favorites, isItemAdded, isItemFavorite, addCartItem, toggleFavorite}) {
  return (
    <section className="content">
      <div className="d-flex justify-between align-center">
        <h1>Мои закладки</h1>
      </div>
      <div className="d-flex flex-wrap align-center cards">
        {favorites.length ?
          favorites.map((item) =>
            <Card
              key={item.id}
              item={item}
              isItemAdded={isItemAdded}
              isItemFavorite={isItemFavorite}
              toggleFavorite={toggleFavorite}
              addCartItem={addCartItem}/>
          )
          :
          <h5>Список пуст!</h5>
        }
      </div>
    </section>
  );
}

export default Favorites;
