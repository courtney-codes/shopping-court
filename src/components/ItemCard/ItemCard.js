import React from "react";

const ItemCard = ({ item }) => (
  <div className="card p-2">
    <img src={item.image} alt={item.name} />
    <div className="card-body">
      <h5 className="card-title">{item.name}</h5>
      <p className="card-text">{item.description}</p>
    </div>
    <div className="form-group">
      <label htmlFor="quantity">Quantity</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <button className="btn btn-outline-primary" type="button">
            -
          </button>
        </div>
        <input type="number" name="quantity" className="form-control text-center" />
        <div className="input-group-append">
          <button className="btn btn-outline-primary" type="button">
            +
          </button>
        </div>
      </div>
    </div>
    <button className="btn btn-large btn-primary">Add to basket</button>
  </div>
);

export default ItemCard;
