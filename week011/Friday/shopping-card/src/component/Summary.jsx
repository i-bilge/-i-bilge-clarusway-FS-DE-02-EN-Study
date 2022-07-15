import React from "react";

export default function Summary(props) {
  const { numberOfItems, totalPrice } = props;
  return (
    <div>
      <p>{numberOfItems} items you selected </p>
      <p>Total price: {totalPrice}</p>
    </div>
  );
}
