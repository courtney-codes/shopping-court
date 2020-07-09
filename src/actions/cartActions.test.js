import * as cartActions from './cartActions';
import * as actionTypes from './actionTypes';
import faker from 'faker';

describe('addItem action', () => {
  it('should create an action that adds an item to the cart', () => {
    const testItemId = faker.random.number();
    const expectedAction = {
      type: actionTypes.ADD_ITEM,
      itemId: testItemId
    };

    expect(cartActions.addItem(testItemId)).toEqual(expectedAction);
  });
});

describe('removeItem action', () => {
  it('should create an action to remove an item from the cart', () => {
    const testItemId = faker.random.number();
    const expectedAction = {
      type: actionTypes.REMOVE_ITEM,
      itemId: testItemId
    };

    expect(cartActions.removeItem(testItemId)).toEqual(expectedAction);
  });
});


