import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../../actions";
import { formatAmount } from "../../lib/formatters";
import { getPriceForItem } from '../../lib/functions';

const BasketItem = ({ item }) => {
  const dispatch = useDispatch();
  const removeFromBasket = () => dispatch(removeItem(item.id));

  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between mb-3">
        <div>
          <h6>{item.name}</h6>
          <small className="text-muted">{formatAmount(item.price)}</small>
        </div>
        <h6 className="text-success">{formatAmount(getPriceForItem(item))}</h6>
      </div>
      <div className="d-flex justify-content-between">
        <input type="number" className="form-control" />
        <button className="btn btn-sm btn-danger" onClick={removeFromBasket}>
          Remove
        </button>
      </div>
    </li>
  );
};

export default BasketItem;
