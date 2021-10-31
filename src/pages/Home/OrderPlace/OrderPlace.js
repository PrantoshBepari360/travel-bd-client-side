import React from 'react';
import { Link } from 'react-router-dom';

const OrderPlace = () => {
  return (
    <div>
      <h2>Order Place</h2>
      <Link to="/home">
        <button class="btn btn-primary mb-3">Go Back</button>
      </Link>
    </div>
  );
};

export default OrderPlace;