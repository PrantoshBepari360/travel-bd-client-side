import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import Orders from "../AllOrders/Orders";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://creepy-alien-88782.herokuapp.com/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

  const { isLoading } = useAuth();
  if (isLoading) {
    return <Spinner animation="border" variant="danger" />;
  }

  return (
    <div>
      <h2 className="py-5">You have placed: {orders.length} orders</h2>
      <ul className="row px-5">
        {orders.map((order) => (
          <li className="col-md-6 col-xxl-4" key={order._id}>
            <div className="border border-success border-2 rounded-3 p-3 mb-3">
            <h2>Name: {order.name}</h2>
            <h2>Email: {order.email}</h2>
            <h3>City: {order.city}</h3>
            <h3>Address: {order.address}</h3>
            <h3>Phone: {order.phone}</h3>
            <h3>Id: {order._id}</h3>
            <Orders order={order?.order}></Orders>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyOrders;
