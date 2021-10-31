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

// https://i.ibb.co/q1bQRQv/click.png
// https://i.ibb.co/BKgLbjt/Group.png
// https://i.ibb.co/xFm1JSP/Icon-circle-1.png
// https://i.ibb.co/CbNTrzN/Icon-circle-2.png
// https://i.ibb.co/B6JqGct/Icon-circle-3.png
// https://i.ibb.co/QHFpFSB/Prantosh.jpg
// https://i.ibb.co/SdvWmbp/Rectangle-12-1.png
// https://i.ibb.co/F6H2mCJ/Rectangle-12-2.png
// https://i.ibb.co/N2WdZ6f/Rectangle-12-3.png
// https://i.ibb.co/rbYM93J/Rectangle-12-4.png
// https://i.ibb.co/YPLqNKh/Rectangle-12-5.png
// https://i.ibb.co/rG2GLT9/Rectangle-12-6.png
// https://i.ibb.co/85VWy04/Rectangle-12-7.png
// https://i.ibb.co/ccfX0zS/Rectangle-12-8.png
// https://i.ibb.co/pK3q4nB/Rectangle-12.png
// https://i.ibb.co/mT2bmZv/Rectangle-15.png
// https://i.ibb.co/CHJJdrj/Rectangle-23-1.png
// https://i.ibb.co/KjmXY4D/Rectangle-23-2.png
// https://i.ibb.co/0r4sdMC/Rectangle-23-3.png
// https://i.ibb.co/PQyFvyn/Rectangle-23-4.png
// https://i.ibb.co/RYPPFQJ/Rectangle-23.png
// https://i.ibb.co/BTL6zGD/Rectangle-39-1.png
// https://i.ibb.co/pX9tXbp/Rectangle-39-2.png
// https://i.ibb.co/tH3NTkj/Rectangle-39.png
// https://i.ibb.co/HCnnfzV/Vector1.png

export default Navigation;
