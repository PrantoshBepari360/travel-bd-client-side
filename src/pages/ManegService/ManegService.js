import React, { useEffect, useState } from "react";

const ManegService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://creepy-alien-88782.herokuapp.com/Travels")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });

  const handelDelete = (id) => {
    console.log(id);
    const url = `https://creepy-alien-88782.herokuapp.com/Travels/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("seccesfully deleted");
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        }
      });
  };

  return (
    <div className="w-100 p-3">
      <h2 className="py-3 text-danger">Manage service</h2>
      <div className="service-container">
      <div className="row px-5">
      {services.map((service) => (
        <div className="col-md-6 col-xxl-4" key={service._id}>
        <div className="border border-danger border-2 rounded-3 p-3 mb-3">
          <img className="w-100" src={service.img} alt="" />
          <h3>Name: {service.name}</h3>
          <h3>Price: {service.price}</h3>
          <p>Description: {service.description}</p>
          <br />
          <button className="btn btn-danger" onClick={() => handelDelete(service._id)}>Delate</button>
        </div>
        </div>
      ))}
        
      </div>
      </div>
    </div>
  );
};

export default ManegService;
