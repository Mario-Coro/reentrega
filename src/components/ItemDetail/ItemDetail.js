import React from "react";
import "./itemdetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  let stock = product.stock;
  return (
    <div className="product-info">
      <img src={product.img} alt="" />
      <div className="product-details">
        <h2>{product.name}🏀</h2>
        <p>{product.description}</p>
        <h3>{product.price}</h3>
        <ItemCount stock={stock} initial={1} />
      </div>
    </div>
  );
};

export default ItemDetail;
