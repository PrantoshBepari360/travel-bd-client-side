import React from "react";

const ReviewItem = (props) => {
  const { name, price, description, img, quantity, _id } = props.product;

  return (
    <div className="m-5 border-bottom pb-3">
      <img src={img} alt="" />
      <h2>Name: {name}</h2>
      <h3>Price: {price}</h3>
      <h4>quentity: {quantity}</h4>
      <p>{description}</p>

      <button
        onClick={() => props.handelRemove(_id)}
        className="btn btn-primary"
      >
        Remove
      </button>
    </div>
  );
};

export default ReviewItem;
