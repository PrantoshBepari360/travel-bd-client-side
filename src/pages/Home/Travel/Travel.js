import React from "react";
import { Link } from "react-router-dom";

const Travel = (props) => {
  const { img, name, price, description } = props.travel;

  return (
      <div className="col-md-6 col-lg-4 pb-3 mb-3">
        <img style={{ width: "90%", height: "18rem" }} src={img} alt="" />
        <h2>{name}</h2>
        <h4>Price: {price}</h4>
        <p className="px-4">{description}</p>
        <div>
          <Link to={"/booking"}>
            <button
              onClick={() => props.handelAddToCart(props.travel)}
              className="btn btn-primary m-3"
            >
              By Now
            </button>
          </Link>
        </div>
      </div>
  );
};

export default Travel;

