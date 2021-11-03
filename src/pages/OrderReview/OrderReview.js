import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import OrderPlace from "../Home/OrderPlace/OrderPlace";
import { deleteFromDb } from "../Login/Firebase/Database";
import ReviewItem from "../ReviewItem/ReviewItem";
import { useHistory } from "react-router";

const OrderReview = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const history = useHistory();

  const handelRemove = (id) => {
    const newCart = cart.filter((product) => product._id !== id);
    setCart(newCart);
    deleteFromDb(id);
  };

  const handelPlaceOrder = () => {
    history.push("/booking");
  };

  return (
    <div className="travel-container py-5">
      <div className="product-container py-5">
        {cart.map((product) => (
          <ReviewItem
            key={product._id}
            product={product}
            handelRemove={handelRemove}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <OrderPlace cart={cart}>
          <button onClick={handelPlaceOrder} className="btn btn-primary">
            Place Order
          </button>
        </OrderPlace>
      </div>
    </div>
  );
};

export default OrderReview;
