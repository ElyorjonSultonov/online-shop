import React, { useState } from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, addCount } from "../../redux/basketSlice";

function Product({ id, title, image, price, product }) {
  const [count, setCount] = useState(0);
  // console.log(id, title, image, price, product);
  // console.log(product);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket);

  const chooseImg = () => {
    navigate(`productDetail/${id}`);
  };

  const chooseBtn = () => {
    const productbtn = {
      ...product,
      soni: count,
    };

    let check = basket.some((item) => item.id === id);

    if (check) {
      // dispatch(addCount(id));
      alert(" Bu mahsulot sizning savtga qo'shilgan ");
    } else {
      dispatch(addToBasket(productbtn));
      // alert(" Mahsulot savatga qoshildi ");
    }
  };
  const minusBtn = () => {
    if (count === 0) setCount(0);
    else setCount(count - 1);
  };

  return (
    <div className="product">
      <img className="productImg" onClick={chooseImg} src={image} alt="..." />
      <div className="productBody">
        <h1 className="productTitle">Name: {title}</h1>
        <h2 className="productPrice">Price: {price}</h2>

        <div className="btns">
          <button className="productBtnCount" onClick={minusBtn}>
            -
          </button>
          <span className="CountZero">{count}</span>
          <button
            className="productBtnCount"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
        <button className="productBtn" onClick={chooseBtn}>
          choosen
        </button>
      </div>
    </div>
  );
}

export default Product;
