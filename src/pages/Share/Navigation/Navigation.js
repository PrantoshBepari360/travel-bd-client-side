import React from "react";
import "./Navigation.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark py-4">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbar"
          >
            <ul className="navbar-nav flex-row flex-wrap justify-content-center">
              <li className="nav-item col-6 col-md-auto m-1">
                <Link to="/home">Home</Link>
              </li>
              <li className="nav-item col-6 col-md-auto m-1">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="nav-item col-6 col-md-auto m-1">
                {user?.email ? (
                  <Link to="/allorders">AllOrders</Link>
                ) : (
                  <div></div>
                )}
              </li>
              <li className="nav-item col-6 col-md-auto m-1">
                {user?.email ? (
                  <Link to="/orderReview">OrderReview</Link>
                ) : (
                  <div></div>
                )}
              </li>
              <li className="nav-item col-6 col-md-auto m-1">
                {user?.email ? (
                  <Link to="/myorders">MyOrder</Link>
                ) : (
                  <div></div>
                )}
              </li>
              <li className="nav-item col-6 col-md-auto m-1">
                <Link to="/author">Author</Link>
              </li>
              <li className="nav-item col-6 col-md-auto m-1">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="nav-item col-6 col-md-auto m-1">
                {user?.email ? (
                  <Button
                    onClick={logOut}
                    variant="light"
                    className="ms-3 me-3"
                  >
                    Logout
                  </Button>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </li>
              <li className="nav-item col-6 col-md-auto m-2">
                {user?.email ? (
                  <div className="fs-4 text-white">
                    Login in as : <Link to="/home">{user?.displayName}</Link>
                  </div>
                ) : (
                  <div></div>
                )}
              </li>
            </ul>
            <hr className="d-md-none text-white-50" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
