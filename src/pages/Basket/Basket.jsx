import React, { useState } from "react";
import "./Basket.css";
import { useSelector } from "react-redux";
import Product from "../../Components/Product/Product";
import ChosenProduct from "../../Components/ChosenProduct/ChosenProduct";

function Basket() {
  const basket = useSelector((state) => state.basket.basket);
  console.log(basket);
  return (
    <div className="basket">
      {basket.length > 0 ? (
        basket.map((item) => (
          <ChosenProduct key={item.id} {...item}/>
          
          // <div className="basketBody">
          //   <img className="basketImg" src={item.image} alt="..." />
          //   <h1 className="basketTitle">Name: {item.title}</h1>
          //   <h2 className="basketPrice">Price: {item.price}</h2>
          // </div>
        ))
      ) : (
        <h1 className="basketTitle">Savatcha bo'm bo'sh</h1>
      )}
    </div>
  );
}

export default Basket;
