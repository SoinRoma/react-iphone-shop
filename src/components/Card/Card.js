import './Card.scss';
import ContentLoader from 'react-content-loader';

const Card = ({item, isItemAdded, isItemFavorite, isLoading, toggleFavorite, addCartItem}) => {
  const obj = {id: item.id, parentId: item.id, name: item.name, price: item.price, imageUrl: item.imageUrl}

  return (
    <div className="card">
      {isLoading ?
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155"/>
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15"/>
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15"/>
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25"/>
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32"/>
        </ContentLoader>
        :
        <>
          <div className="favourite" onClick={() => toggleFavorite(item)}>
            <img src={isItemFavorite(item) ? './svg/like.svg' : './svg/unlike.svg'} alt="like"/>
          </div>
          <img src={item.imageUrl} alt="sneaker1" width="133"/>
          <h4>{item.name}</h4>
          <div className="d-flex justify-between align-center">
            <div className="card-price">
              <p>Цена:</p>
              <span>{item.price} руб.</span>
            </div>
            <img className="cu-p" src={isItemAdded(item) ? './svg/button-check.svg' : './svg/button-uncheck.svg'}
                 alt="uncheck"
                 width="32" height="32" onClick={() => addCartItem(obj)}/>
          </div>
        </>
      }

    </div>
  );
};

export default Card;
