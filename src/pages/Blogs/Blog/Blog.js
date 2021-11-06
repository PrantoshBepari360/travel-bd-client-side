import React from "react";
import { Link } from "react-router-dom";

const Blog = (props) => {
  const { img, name, price, description, _id } = props.travel;

  return (
    <div>
      <div className="p-5 pt-0">
        <div className="text-start">
        <img className="w-100" style={{ height: "18rem" }} src={img} alt="" />
        <h2>{name}</h2>
        <h4>Price: {price}</h4>
        <p>{description}</p>
        </div>
        <Link to={`/serviceDetails/${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
      </div>
    </div>
  );
};

export default Blog;
