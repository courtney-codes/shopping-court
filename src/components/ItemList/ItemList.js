import React from "react";
import { useSelector } from "react-redux";
import ItemCard from '../ItemCard/ItemCard';

const ItemList = () => {
  const availableProducts = useSelector(state => state.products);
  
  return (
    <div className="row p-3 mx-3">
      {availableProducts.map((item) => (
        <div className="col-md-12 col-lg-4"><ItemCard item={item}/></div>
      ))}
    </div>
  );
};

export default ItemList;
