import { ADD_ITEM, REMOVE_ITEM } from './actionTypes';

export const addItem = (itemId) => ({ type: ADD_ITEM, itemId });
export const removeItem = (itemId) => ({ type: REMOVE_ITEM, itemId });