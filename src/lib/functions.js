import * as R from "ramda";

export const addToBasket = (itemId, products, basket) =>
  R.append(R.find(R.propEq("id", itemId), products), R.__)(basket);

export const removeFromBasket = (itemId, basket) =>
  R.remove(R.findIndex(R.propEq("id", itemId), R.__), 1, R.__)(basket);

const convertPricePerKgToGram = R.divide(R.__, 1000);
const getUnitWeight = R.view(R.lensProp("weight"));
const getBasePrice = R.view(R.lensProp("price"));

const calculatePricePerWeight = R.converge(R.multiply, [getUnitWeight, R.compose(convertPricePerKgToGram, getBasePrice)]);

export const getPriceForItem = item => R.ifElse(
  R.has("weight", R.__),
  calculatePricePerWeight(R.__),
  getBasePrice(R.__)
)(item);

export const totalAllItems = basket => R.reduce(R.add, 0, R.map(getPriceForItem, basket));
