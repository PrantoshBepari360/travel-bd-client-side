import React from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const Contact = () => {
  const {isLoading } = useAuth();
  if (isLoading) {
    return <Spinner animation="border" variant="danger" />
}

  return (
    <div>
      <h2 className="py-5">Contact</h2>
      <img
        className="img-fluid w-75"
        src="https://i.ibb.co/2M3tRbq/map5.png"
        alt=""
      />
      <div className="row my-5 w-75 mx-auto">
        <div className="card border-0 col-md-6">
          <div className="card-body px-2">
            <h3 className="text-center">Get in a touch !</h3>
            <form>
                <div className="row g-3">
                   <div className="col-lg-6 m-0">
                    <label className="py-2 mt-2">Your Name</label>
                    <div className="">
                        <input type="text" className="form-control" placeholder="your name" id="name"/>
                    </div>
                   </div>
                   <div className="col-lg-6 m-0">
                    <label className="py-2 mt-2">Your Email</label>
                    <div className="">
                        <input type="email" className="form-control" placeholder="your email" id="email"/>
                    </div>
                   </div>
                </div>
                <div className="form-group">
                  <label className="py-2 mt-2">Your Subject</label>
                    <div className="">
                        <input type="text" className="form-control" placeholder="your subject" id="subject"/>
                    </div>
                </div>
                <div className="form-group">
                  <label className="py-2 mt-2">Your Message</label>
                    <div className="">
                        <textarea className="form-control" placeholder="Your message" id="floatingTextarea"></textarea>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-dark btn-lg mt-3">Please Join</button>
                </div>
            </form>
          </div> 
        </div>
        <div className="card border-0 col-md-6">
          <div className="card-body px-2">
            <h3 className="text-center">Contact info !</h3>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
            </p>
            <div className="row g-3">
              <div className="col-12">
               <div className="d-flex align-items-center">
                <a href="#" className="card-link text-decoration-none text-success me-3"><i className="fas fa-map-marker-alt fa-2x" aria-hidden="true"></i></a>
                <div className="text-start">
                  <p className="m-0">Address:</p>
                  <p className="m-0">2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                </div>
               </div>
              </div>
              <div className="col-12">
               <div className="d-flex align-items-center">
                <a href="#" className="card-link text-decoration-none text-success me-3"><i className="far fa-envelope fa-2x" aria-hidden="true"></i></a>
                <div className="text-start">
                  <p className="m-0">Email:</p>
                  <p className="m-0">info@bdtravel.com</p>
                </div>
               </div>
              </div>
              <div className="col-12">
               <div className="d-flex align-items-center">
                <a href="#" className="card-link text-decoration-none text-success me-3"><i className="fas fa-phone-alt fa-2x" aria-hidden="true"></i></a>
                <div className="text-start">
                  <p className="m-0">Phone:</p>
                  <p className="m-0">(239) 555-0108</p>
                </div>
               </div>
              </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
