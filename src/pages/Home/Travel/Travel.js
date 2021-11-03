import React from "react";
import { Link } from "react-router-dom";

const Travel = (props) => {
  const { img, name, price, description, _id } = props.travel;

  return (
    <div className="mb-3 me-3">
      <div className="pb-3 border-bottom">
        <img style={{ width: "90%", height: "18rem" }} src={img} alt="" />
        <h2>{name}</h2>
        <h4>Price: {price}</h4>
        <p className="px-3">{description}</p>
        <div>
          <Link to={"/"}>
            <button
              onClick={() => props.handelAddToCart(props.travel)}
              className="btn btn-primary me-3"
            >
              By Now
            </button>
          </Link>
          <Link to={`/serviceDetails/${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Travel;

// `/serviceDetails/${_id}`
