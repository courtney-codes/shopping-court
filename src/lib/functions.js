import * as R from "ramda";

export const addToBasket = (itemId, products, basket) =>
  R.append(R.find(R.propEq("id", itemId), products), R.__)(basket);

export const removeFromBasket = (itemId, basket) =>
  R.remove(R.findIndex(R.propEq("id", itemId), R.__), 1, R.__)(basket);

import * as R from 'ramda';

export const addToBasket = (itemId, products, basket) => R.append(R.find(R.propEq("id", itemId), products), R.__)(basket);

export const removeFromBasket = (itemId, basket) => R.remove(R.findIndex(R.propEq("id", itemId), R.__), 1, R.__)(basket);

export const pricePerWeightInGrams = R.multiply(R.divide(R.__, 100));  