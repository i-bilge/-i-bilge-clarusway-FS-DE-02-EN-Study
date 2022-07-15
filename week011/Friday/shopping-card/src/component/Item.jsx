import React from "react";
import "./Item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { capitalizeFirstLetter } from "../utils/util";

export default function Item(props) {
  const { product, handleRemove, handleIncrement, handleDecrement } = props;
  return (
    <div className="product">
      <div>
        <img src={product.imageURL} alt="Product" />
      </div>
      <div>
        <p>{product.price} $</p>
        <p>{capitalizeFirstLetter(product.title)} </p>
        <h1>{product.count}</h1>
        <FontAwesomeIcon
          onClick={() => handleIncrement(product.id)}
          icon={faPlus}
          className="icon-counter"
        />
        <FontAwesomeIcon
          onClick={() => handleDecrement(product.id)}
          icon={faMinus}
          className="icon-counter"
        />
        <FontAwesomeIcon
          onClick={() => handleRemove(product.id)}
          icon={faTrash}
          className="icon-counter"
        />
      </div>
    </div>
  );
}
