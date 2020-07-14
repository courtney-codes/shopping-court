import React from "react";
import { IconContext } from "react-icons";
import { RiShoppingBasket2Line } from "react-icons/ri";

const NavBar = ({ basketCount }) => (
  <IconContext.Provider value={{ size: "2em" }}>
    <nav
      className="navbar navbar-expand-md navbar-dark bg-primary px-3 mb-3 justify-content-between fixed-top"
      data-testid="navbar"
    >
      <a href="#" className="navbar-brand">
        ShoppingCourt
      </a>
      <div className="navbar-nav">
        <div className="nav-item text-white d-flex align-items-center" data-testid="basket-nav-item">
          <RiShoppingBasket2Line className="mr-2" />
          {basketCount} items in basket
        </div>
      </div>
    </nav>
  </IconContext.Provider>
);

export default NavBar;
