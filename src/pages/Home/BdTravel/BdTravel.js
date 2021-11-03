import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { addToDb, getStoredBook } from "../../Login/Firebase/Database";
import OrderPlace from "../OrderPlace/OrderPlace";
import Travel from "../Travel/Travel";
import "./BdTravel.css";

const BdTravel = () => {
  const [travels, setTravel] = useState([]);
  const [cart, setCart] = useState([]);
  const [displayProduct, setDisplayProduct] = useState([]);

  useEffect(() => {
    fetch("https://creepy-alien-88782.herokuapp.com/Travels")
      .then((res) => res.json())
      .then((travel) => {
        setTravel(travel)
        setDisplayProduct(travel)
      });
  }, []);

  const handelAddToCart = (product) => {
    const exists = cart.find((pd) => pd._id === product._id);
    let newCart = [];
    if (exists) {
      const rest = cart.filter((pd) => pd._id !== product._id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDb(product._id);
  };

  useEffect(() => {
    if (travels.length) {
      const saveCart = getStoredBook();
      const storeCard = [];
      for (const _id in saveCart) {
        const addedProduct = travels.find((travel) => travel._id === _id);
        if (addedProduct) {
          const quantity = saveCart[_id];
          addedProduct.quantity = quantity;
          storeCard.push(addedProduct);
        }
      }
      setCart(storeCard);
    }
  }, [travels]);

  const handelSearch = (event) => {
    const searchText = event.target.value;
    console.log(searchText);
    const matchedProducts = travels.filter((travel) =>
      travel.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setDisplayProduct(matchedProducts);
  };

  const {isLoading } = useAuth();
  if (isLoading) {
    return <Spinner animation="border" variant="danger" />
}

  return (
    <div>
      <h2 className="py-3">BdTravel</h2>
      <div className="search-container">
        <input
          onChange={handelSearch}
          type="text"
          placeholder="type here to search"
        />
      </div>
      <div className="travel-container mt-3">
        <div className="product-container">
          {displayProduct.map((travel) => (
            <Travel
              key={travel._id}
              travel={travel}
              handelAddToCart={handelAddToCart}
            ></Travel>
          ))}
        </div>
        <div className="cart-container">
          <OrderPlace cart={cart}>
              <Link to="/orderReview">
              <button className="btn btn-primary">Review your order</button>
              </Link>
          </OrderPlace>
        </div>
      </div>
    </div>
  );
};

export default BdTravel;
