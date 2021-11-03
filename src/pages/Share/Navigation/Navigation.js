import React from "react";
import "./Navigation.css";
import { Button, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="/home" className="fs-4 px-2 border border-2">
            BD TRAVEL <i className="fas fa-plane"></i>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className=" justify-content-center fs-4">
            <ul className="d-flex align-items-center mb-0 ps-0">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              {user?.email ? (
                <ul className="d-flex mb-0 ps-0">
                  <li>
                    <Link to="/allorders">AllOrders</Link>
                  </li>
                  <li>
                    <Link to="/orderReview">OrderReview</Link>
                  </li>
                  <li>
                    <Link to="/myorders">MyOrder</Link>
                  </li>
                </ul>
              ) : (
                <div></div>
              )}
              <li>
                <Link to="/author">Author</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              {user?.email ? (
                <Button onClick={logOut} variant="light" className="m-3">
                  Logout
                </Button>
              ) : (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
              {user.email && (
                <li>
                  <Navbar.Text>
                    Login in as :<Link to="/home">{user?.displayName}</Link>
                  </Navbar.Text>
                </li>
              )}
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
