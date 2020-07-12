import { ADD_ITEM, REMOVE_ITEM } from '../actions/actionTypes';
import { addToBasket, removeFromBasket } from '../lib/functions';
 
const initialState = {
  products: [],
  promotionalOffers: [],
  basket: [],
  total: 0,
  subtotal: 0
}

const shoppingCart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        basket: addToBasket(action.itemId, state.products, state.basket)
      };
    case REMOVE_ITEM:
      return {
        ...state,
        basket: removeFromBasket(action.itemId, state.basket),
      }
    default:
      return state;
  }
}

export default shoppingCart;