import { getPriceForItem, totalAllItems } from './functions';

describe('getPriceForItem', () => {
  let testItem = {
    id: 1,
    name: "Pink Lady Apples",
    description: "Crispy and delicious, with a sweet flavour.",
    price: 350,
  };

  it('should return the base price of an item with no weight', () => {
    expect(getPriceForItem(testItem)).toEqual(350);
  });
  
  it('should return the price of a single unit if the item has a weight property', () => {
    testItem.weight = 80;

    expect(getPriceForItem(testItem)).toEqual(28);
  });
});

describe('totalAllItems', () => {
  let basket = [
    { id: 1, name: "Pink Lady Apples", description: "Crispy and delicious, with a sweet flavour.", price: 350 },
    { id: 2, name: "Cola", description: "A refreshing drink", price: 80 }
  ];

  it('should return a total of all the items in the basket', () => {
    expect(totalAllItems(basket)).toEqual(430);
  });

  it('should handle items priced by unit and by weight', () => {
    basket = [
      { id: 1, name: "Pink Lady Apples", description: "Crispy and delicious, with a sweet flavour.", price: 350, weight: 80 },
      { id: 2, name: "Cola", description: "A refreshing drink", price: 80 }
    ];
    expect(totalAllItems(basket)).toEqual(108);
  });
});