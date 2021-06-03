
import React from 'react';

export default function Product(props) {
  const {product, onAdd} = props;
  return (
    <div>
      <img className="small" src={product.image} alt={product.name} />
      <h3 className="shop-products">{product.name}</h3>
      <div>€{product.price}</div>
      <div>
        <button onClick={() => onAdd(product)} className="shop-btn">Add To Cart</button>
      </div>
    </div>
  );
}

