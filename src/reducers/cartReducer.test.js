import { addItem, removeItem } from "../actions/cartActions";
import cartReducer from "./cartReducer";

describe("cartReducer", () => {
  /** Setup test fixtures */
  const testItem = {
    id: 1,
    name: "Pink Lady Apples",
    description: "Crispy and delicious, with a sweet flavour.",
    price: 35,
  };

  it("should return the initial state when first called", () => {
    const expectedState = {
      products: [],
      promotionalOffers: [],
      basket: [],
      total: 0,
      subtotal: 0,
    };

    expect(cartReducer(undefined, {})).toEqual(expectedState);
  });

  it("should handle the ADD_ITEM action", () => {
    const expectedState = {
      products: [testItem],
      promotionalOffers: [],
      basket: [testItem],
      total: 0,
      subtotal: 0,
    };

    expect(
      cartReducer(
        {
          products: [testItem],
          promotionalOffers: [],
          basket: [],
          total: 0,
          subtotal: 0,
        },
        addItem(1)
      )
    ).toEqual(expectedState);
  });

  it("should handle the REMOVE_ITEM action", () => {
    const expectedState = {
      products: [testItem],
      promotionalOffers: [],
      basket: [],
      total: 0,
      subtotal: 0,
    };

    expect(
      cartReducer({
        products: [testItem],
        promotionalOffers: [],
        basket: [testItem],
        total: 0,
        subtotal: 0,
      }, removeItem(1))
    ).toEqual(expectedState);
  });
});
