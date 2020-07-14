import React from "react";

const Basket = (props) => (
  <div className="h-100 d-flex flex-column align-items-center p-3 bg-light border-top border-left">
    <h3 className="mb-4">Your basket</h3>
    <ul className="list-group w-100 mb-4">
      <li className="list-group-item">
        <div className="d-flex justify-content-between mb-3">
          <div>
            <h6>Pink Lady Apples</h6>
            <small className="text-muted">£3.50 per kg</small>
          </div>
          <h6 className="text-success">35p</h6>
        </div>
        <div className="d-flex justify-content-between">
          <input type="number" className="form-control" />
          <button className="btn btn-sm btn-danger">Remove</button>
        </div>
      </li>
    </ul>
    <div className="w-100">
      <div className="d-flex justify-content-between">
        <h6>Subtotal</h6>
        <h6>£27.34</h6>
      </div>
      <div className="d-flex justify-content-between">
        <h6>Savings</h6>
        <h6>£2.80</h6>
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

export default Basket;
