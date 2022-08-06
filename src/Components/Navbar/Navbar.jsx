import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const basket = useSelector((state) => state.basket.basket);
  return (
    <nav>
      <Link className="NavLink" to="/">
        Home
      </Link>
      <Link className="NavLink" to="/basket">
        Basket <sup>{basket.length}</sup>
      </Link>
      <Link className="NavLink" to="/purchase">
       Purchase
      </Link>
      <Link className="NavLink" to="/login">
        Login
      </Link>
     
    </nav>
  );
}

export default Navbar;
