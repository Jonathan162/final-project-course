
import React from "react";
import Product from "./Product";

export default function ShopBody(props) {
  const {products, onAdd} = props;
  return (
    <main className="block col-2">
      <h2 className="shop-title">Add your hiking trip to the cart</h2>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}