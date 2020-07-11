import { ADD_ITEM, REMOVE_ITEM } from '../actions/actionTypes';
import * as R from 'ramda';

const addToBasket = (itemId, products, basket) => R.append(R.find(R.propEq("id", itemId), products), R.__)(basket);
const removeFromBasket = (itemId, basket) => R.remove(R.findIndex(R.propEq("id", itemId), R.__), 1, R.__)(basket);
 
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
        basket: removeFromBasket(action.itemId, state.basket)
      }
    default:
      return state;
  }
}

export default shoppingCart;