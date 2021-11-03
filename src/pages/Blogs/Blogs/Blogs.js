import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [travels, setTravel] = useState([]);

  useEffect(() => {
    fetch("https://creepy-alien-88782.herokuapp.com/Travels")
      .then((res) => res.json())
      .then((travel) => setTravel(travel));
  }, []);

  const {isLoading } = useAuth();
  if (isLoading) {
    return <Spinner animation="border" variant="danger" />
}

  return (
    <div className="px-5">
      <h1 className="py-5">Blog</h1>
      <div className="row mt-3">
        <div className="col-md-6 px-5 border border-top-0 border-start-0 border-bottom-0">
          {travels.map((travel) => (
            <Blog key={travel._id} travel={travel}></Blog>
          ))}
        </div>
        <div className="col-md-6 px-5">
          <h2 className="mb-5 text-start">About Me</h2>
          <img
            style={{ borderRadius: "10%" }}
            className="w-50"
            src="https://i.ibb.co/QHFpFSB/Prantosh.jpg"
            alt=""
          />
          <h4 className="py-3">Prantosh Bepari</h4>
          <div className="text-start">
            <p>
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT UT
              ALIQUAM, PURUS SIT AMET
            </p>
            <div className="d-flex justify-content-center fs-3">
              <i className="fab fa-facebook me-3 p-2 border border-3 rounded-circle"></i>
              <i className="fab fa-twitter me-3 p-2 border border-3 rounded-circle"></i>
              <i className="fab fa-instagram me-3 p-2 border border-3 rounded-circle"></i>
              <i className="fab fa-youtube p-2 border border-3 rounded-circle"></i>
            </div>
            <h3 className="py-3">Newsletter</h3>
            <p>
              GAT ALL LATEST CONTENT DELIVERED TO YOUR EMAIL A FEW TIMES A
              MONTH.
            </p>
            <h3 className="py-3">Follow Us</h3>
            <div className="fs-3">
              <i className="fab fa-twitter-square me-3 p-2 border border-2 rounded-3"></i>
              <i className="fab fa-facebook-square me-3 p-2 border border-2 rounded-3"></i>
              <i className="fab fa-instagram-square me-3 p-2 border border-2 rounded-3"></i>
              <i className="fab fa-linkedin me-3 p-2 border border-2 rounded-3"></i>
            </div>
            <div className="mt-3 fs-3">
              <i className="fab fa-youtube-square me-3 p-2 border border-2 rounded-3"></i>
              <i className="fab fa-pinterest-square me-3 p-2 border border-2 rounded-3"></i>
              <i className="fab fa-google-plus-square me-3 p-2 border border-2 rounded-3"></i>
              <i className="fab fa-whatsapp-square me-3 p-2 border border-2 rounded-3"></i>
            </div>
            <h3 className="py-3">Recent post</h3>
            <div className="d-flex mb-5">
              <img src="https://i.ibb.co/tH3NTkj/Rectangle-39.png" alt="" />
              <div className="ms-4">
                <h2 className="mb-0">Sundarban, Bangladesh</h2>
                <p className="mb-0">23-April-2021 / 15 Comments</p>
              </div>
            </div>
            <div className="d-flex mb-5">
              <img src="https://i.ibb.co/BTL6zGD/Rectangle-39-1.png" alt="" />
              <div className="ms-4">
                <h2 className="mb-0">Sundarban, Bangladesh</h2>
                <p className="mb-0">23-April-2021 /15 Comments</p>
              </div>
            </div>
            <div className="d-flex mb-5">
              <img src="https://i.ibb.co/pX9tXbp/Rectangle-39-2.png" alt="" />
              <div className="ms-4">
                <h2 className="mb-0">Sundarban, Bangladesh</h2>
                <p className="mb-0">23-April-2021 /15 Comments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
