import React from "react";
import "./Products.css";
import { useProductsQuery } from "../../services/ProductsApi";
import Product from "../Product/Product";

function Products() {
  const { data, isLoading, isSuccess } = useProductsQuery();
  console.log(data);
  return (
    <div className="products">
      <h1 className="productsTitle">Mahsulotlar Ro'yhati</h1>
      <h2>{isLoading && "Loading . . ."}</h2>
      {isSuccess && (
        <div className="rowGrid">
          {data.map((product) => (
            <Product key={product.id} {...product} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
