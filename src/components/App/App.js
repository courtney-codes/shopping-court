import "./App.css";
import AppleImg from "../../assets/Apples.jpg";
import Basket from '../Basket/Basket';
import ItemCard from "../ItemCard/ItemCard";
import ItemList from "../ItemList/ItemList";
import NavBar from "../NavBar/NavBar";
import React from "react";

const item = {
  id: 1,
  name: "Pink Lady Apples",
  image: AppleImg,
  description: "Crisp and delicious, with a sweet flavour.",
  price: 350,
};

function App() {
  return (
    <div className="App">
      <NavBar basketCount={3} />
      <div className="row">
        <div className="col-md-8 col-sm-12 overflow-auto h-100">
          <ItemList>
            <ItemCard item={item} />
            <ItemCard item={item} />
            <ItemCard item={item} />
            <ItemCard item={item} />
            <ItemCard item={item} />
            <ItemCard item={item} />
            <ItemCard item={item} />
          </ItemList>
        </div>
        <div className="col-md-4 col-sm-12">
          <Basket />
        </div>
      </div>
    </div>
  );
}

export default App;
