import React, { useState } from "react";
import "./ChosenProduct.css";
import { addDeleteBasket } from "../../redux/basketSlice";
import { useDispatch } from "react-redux";
function ChosenProduct({ image, id, title, price, soni }) {
  const [choseCount, setChoseCount] = useState(Number(soni));
  const total = Number(price) * Number(choseCount);
  const dispatch = useDispatch();

  const minusBtnShose = () => {
    if (choseCount === 1) setChoseCount(1);
    else setChoseCount(choseCount-1);
  };

  const deleteChoseBtn = () => {
    dispatch(addDeleteBasket(id));
  };

  return (
    <div className="chosenProduct">
      <img className="chosenImg" src={image} alt="...." />
      <h1>Name: {title}</h1>
      <h1>Price: {price}</h1>
      <h1>Count: {soni}</h1>
      <div className="chosenBtnDFlex">
        <button onClick={minusBtnShose} className="CountBtnChosen">
          -
        </button>
        <span>{soni}</span>
        <button
          onClick={() => setChoseCount(choseCount + 2)}
          className="CountBtnChosen"
        >
          +
        </button>
      </div>
      <b>{total}</b>
      <button className="chosenBtn">Buy</button>
      <button className="deleteBtn" onClick={deleteChoseBtn}>
        X
      </button>
    </div>
  );
}

export default ChosenProduct;
