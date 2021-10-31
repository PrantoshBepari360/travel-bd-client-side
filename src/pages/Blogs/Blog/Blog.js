import React from "react";

const Blog = (props) => {
  const { img, name, price, description } = props.travel;

  return (
    <div>
      <div className="p-5 pt-0  text-start">
        <img className="w-100" style={{ height: "18rem" }} src={img} alt="" />
        <h2>{name}</h2>
        <h4>Price: {price}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Blog;
