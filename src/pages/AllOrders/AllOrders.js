import React from 'react';
import AddServices from '../AddServices/AddServices';
import ManegService from '../ManegService/ManegService';

const AllOrders = () => {
  return (
    <div>
      <h2>All Orders</h2>
      <AddServices></AddServices>
      <ManegService></ManegService>
    </div>
  );
};

export default AllOrders;