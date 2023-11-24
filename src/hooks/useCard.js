import {useContext} from "react"
import {AppContext} from "../context"

export const useCard = () => {
  const {cartItems, favorites} = useContext(AppContext)

  const isItemAdded = (obj) => {
    return cartItems.find((item) => +item.parentId === +obj.id)
  }

  const isItemFavorite = (obj) => {
    return favorites.find((item) => +item.id === +obj.id)
  }

  return {isItemFavorite, isItemAdded}
}
