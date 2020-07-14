import "./App.css";
import Basket from "../Basket/Basket";
import ItemList from "../ItemList/ItemList";
import NavBar from "../NavBar/NavBar";
import React from "react";

function App() {
  return (
    <div className="App">
      <NavBar basketCount={3} />
      <div className="row">
        <div className="col-md-8 col-sm-12 overflow-auto h-100">
          <ItemList />
        </div>
        <div className="col-md-4 col-sm-12">
          <Basket />
        </div>
      </div>
    </div>
  );
}

export default App;
