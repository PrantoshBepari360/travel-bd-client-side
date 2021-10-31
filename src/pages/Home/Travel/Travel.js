import React from "react";
import { Link } from "react-router-dom";

const Travel = (props) => {
  const { img, name, price, description, _id  } = props.travel;
  console.log(_id)

  return (
    <div className="col-md-6 col-lg-4">
      <div className="pb-3">
        <img style={{ width: "90%", height: "18rem" }} src={img} alt="" />
        <h2>{name}</h2>
        <h4>Price: {price}</h4>
        <p className="px-3">{description}</p>
        <Link to={`/serviceDetails/${_id}`}>
          <button className="btn btn-primary">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Travel;
