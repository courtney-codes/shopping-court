import { ADD_ITEM, REMOVE_ITEM } from '../actions/actionTypes';

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
        basket: [
          ...state.basket,
          () => state.products.find(item => item.id === action.itemId)
        ]
      };
    case REMOVE_ITEM:
      return {
        ...state,
        basket: [
          ...state.basket
          /** TODO: implement removing item from basket */
        ]
      }
    default:
      return state;
  }
}

export default shoppingCart;