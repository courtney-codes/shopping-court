import { ADD_ITEM, REMOVE_ITEM } from "../actions/actionTypes";
import { addToBasket, removeFromBasket, totalAllItems } from "../lib/functions";
import AppleImg from "../assets/Apples.jpg";
import ColaImg from "../assets/Cola.jpg";
import MilkImg from "../assets/WholeMilk.jpg";

const initialState = {
  products: [
    {
      id: 1,
      name: "Pink Lady Apples (loose)",
      image: AppleImg,
      description: "Crispy and delicious, with a sweet flavour.",
      price: 350,
      weight: 80,
    },
    { id: 2, name: "Cola", image: ColaImg, description: "A refreshing soft drink.", price: 80 },
    { id: 3, name: "Whole Milk (2Ltr)", image: MilkImg, description: "2Ltr bottle. Filled with calcium and nutrients.", price: 169 },
  ],
  promotionalOffers: [],
  basket: [],
  total: 0,
  savings: 0,
  subtotal: 0,
};

const shoppingCart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        basket: addToBasket(action.itemId, state.products, state.basket),
        subtotal: totalAllItems(addToBasket(action.itemId, state.products, state.basket)),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        basket: removeFromBasket(action.itemId, state.basket),
        subtotal: totalAllItems(removeFromBasket(action.itemId, state.basket)),
      };
    default:
      return state;
  }
};

export default shoppingCart;
