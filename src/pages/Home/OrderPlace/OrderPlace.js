import React from "react";

const OrderPlace = (props) => {
  const { cart } = props;

  let totalQuantity = 0;
  let total = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    total = total + product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
  }

  return (
    <div>
      <h1>Travel add Place</h1>
      <h3>Place ordered: {totalQuantity}</h3>
      <br />
      <h4>Total Cost : {total.toFixed(2)}</h4>
      <h2 className="mt-5">{props.children}</h2>
    </div>
  );
};

export default OrderPlace;
