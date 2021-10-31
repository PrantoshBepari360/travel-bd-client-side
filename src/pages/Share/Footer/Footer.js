import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark d-flex flex-column">
        <h1 className="text-light fs-3 p-3">BDTRAVEL</h1>

        <p className="text-light fs-4 text-center">
          Subscribe to our newsletter
        </p>

        <div className="text-box-footer">
          <input
            type="email"
            name=""
            id=""
            placeholder="enter your email address"
          />
          <br />
          <button className="btn btn-primary">Submit</button>
        </div>

        <div className="footer-social-link">
          <div className="icons">
            <i className="fab fa-facebook-square"></i>
          </div>
          <div className="icons">
            <i className="fab fa-twitter-square"></i>
          </div>
          <div className="icons">
            <i className="fab fa-linkedin"></i>
          </div>
          <div className="icons">
            <i className="fab fa-instagram-square"></i>
          </div>
          <div className="icons">
            <i className="fab fa-youtube-square"></i>
          </div>
          <div className="icons">
            <i className="fab fa-pinterest-square"></i>
          </div>
        </div>

        <small>@Copyright & Design Prantosh Bepari</small>
      </footer>
    </div>
  );
};

export default Footer;
