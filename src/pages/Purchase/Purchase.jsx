import React from "react";
import "./Purchase.css";
import {
  useAddPurchaseMutation,
  usePurchaseQuery,
} from "../../services/PurchaseApi";

function Purchase() {
  const [addPurchase] = useAddPurchaseMutation();
  const { data, error, isSuccess, isLoading } = usePurchaseQuery();
  const PurchaseBtn = (e) => {
    e.preventDefault();
    const xarid = {
      name: "olma",
      userName: "Elyor",
      phone: "+998979039798",
      count: 5,
      location: "Chilonzor 5 kvartal",
    };
    addPurchase(xarid);
  };
  return (
    <div className="purchase">
      <h1>Purchase</h1>
      <button onClick={PurchaseBtn}>Shopping</button>
      <h1>Xaridlar</h1>
      {isSuccess &&
        data.map((item, index) => (
          <div className="purchaseTitle">
            <h2>{index + 1}.</h2>
            <h2>Name: {item.name}</h2>
            <h2>Username: {item.userName}</h2>
            <h2>{item.count} kg</h2>
            <h2>Tel: {item.phone}</h2>
            <h2>Location: {item.location}</h2>
          </div>
        ))}
    </div>
  );
}

export default Purchase;
