import React from "react";

const ItemList = ({ children }) => (
  <div className="row p-3 mx-3">
    {children.map(child => <div className="col-md-12 col-lg-4">{child}</div>)}
  </div>
);

export default ItemList;
