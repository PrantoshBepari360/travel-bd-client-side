import React, { useEffect, useState } from "react";
import AddServices from "../AddServices/AddServices";
import ManegService from "../ManegService/ManegService";
import Orders from "./Orders";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  console.log(orders);

  useEffect(() => {
    fetch("https://creepy-alien-88782.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  return (
    <div>
      <h2 className="py-5">All Orders</h2>
      <div className="row px-5">
        {orders.map((order) => (
          <div className="col-md-6 col-xxl-4" key={order._id}>
            <div className="border border-success border-2 rounded-3 p-3 mb-3">
              <h2>Name: {order.name}</h2>
              <h3>Email: {order.email}</h3>
              <h3>City: {order.city}</h3>
              <h3>Address: {order.address}</h3>
              <h3>Phone: {order.phone}</h3>
              <h3>Id: {order._id}</h3>
              <Orders order={order?.order}></Orders>
            </div>
          </div>
        ))}
      </div>
      <AddServices></AddServices>
      <ManegService></ManegService>
    </div>
  );
};

export default AllOrders;

{
  /* <Orders key={order._id}order={order}></Orders> */
}
