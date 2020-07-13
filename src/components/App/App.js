import React from "react";
import "./App.css";
import ItemCard from "../ItemCard/ItemCard";
import ItemList from "../ItemList/ItemList";
import AppleImg from "../../assets/Apples.jpg";
import NavBar from "../NavBar/NavBar";

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
    <div className="col-md-8 col-sm-12">
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
      </div>
    </div>
  );
}

export default App;
