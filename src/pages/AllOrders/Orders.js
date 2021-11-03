import React from "react";

const Orders = (props) => {
  const order_id = [];
  for (const property in props.order) {
    //  order_id.push(property)
    order_id.push(`${property}: ${props.order[property]}`);
  }

  return (
    <div>
      {order_id.map((order) => (
        <div key={order._id}>Order key: {order}</div>
      ))}
    </div>
  );
};

export default Orders;
