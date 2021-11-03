import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  const { _id } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`https://creepy-alien-88782.herokuapp.com/Travels/${_id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [_id]);

  return (
    <div className="w-50 mx-auto">
      <h2 className="pt-5">Details</h2>
      <div className="py-5">
        <div className="row mb-3">
          <div className="border border-primary border-2 rounded-3 p-3 mb-3">
            <img className="w-75" src={service.img} alt="" />
            <h2>Name: {service.name}</h2>
            <h3>Price: {service.price}</h3>
            <h4>Description: {service.description}</h4>
          </div>
         <div className="d-flex justify-content-center">
         <Link to="/home">
            <button className="btn btn-primary me-5">Back</button>
          </Link>
         </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
