import React from "react";
import { useSelector } from "react-redux";
import BasketItem from "../BasketItem/BasketItem";
import { formatAmount } from '../../lib/formatters';

const Basket = () => {
  const { basket: itemsInBasket, subtotal, savings } = useSelector((state) => state);

  return (
    <div className="h-100 d-flex flex-column align-items-center p-3 bg-light border-bottom border-left">
      <h3 className="mb-4">Your basket</h3>
      <ul className="list-group w-100 mb-4">
        {itemsInBasket.map((item) => (
          <BasketItem item={item} />
        ))}
      </ul>
      <div className="w-100">
        <div className="d-flex justify-content-between">
          <h6>Subtotal</h6>
          <h6>{formatAmount(subtotal)}</h6>
        </div>
        <div className="d-flex justify-content-between">
          <h6>Savings</h6>
          <h6>{formatAmount(savings)}</h6>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <h5>Total</h5>
          <h5>£2.80</h5>
        </div>
      </div>
      <button className="btn btn-lg btn-success">Proceed to Checkout</button>
    </div>
  );
};

export default Basket;
