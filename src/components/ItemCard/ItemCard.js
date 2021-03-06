import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../actions";
import { formatAmount } from '../../lib/formatters';

const ItemCard = ({ item }) => {

  const dispatch = useDispatch();
  const addItemToBasket = () => dispatch(addItem(item.id));

  return (
    <div className="card p-2 mb-3 d-flex align-items-center">
      <img className="img-small" src={item.image} alt={item.name} />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.description}</p>
      </div>
      <h6 className="text-success">{formatAmount(item.price)}</h6>
      <div className="form-group w-50">
        <label htmlFor="quantity">Quantity</label>
        <div className="input-group">
          <div className="input-group-prepend">
            <button className="btn btn-outline-primary" type="button">
              -
            </button>
          </div>
          <input type="number" name="quantity" className="form-control text-center no-spinner" defaultValue={0} />
          <div className="input-group-append">
            <button className="btn btn-outline-primary" type="button">
              +
            </button>
          </div>
        </div>
      </div>
      <button className="btn btn-inline btn-large btn-primary mb-3" onClick={addItemToBasket}>Add to basket</button>
    </div>
  );
};

export default ItemCard;
