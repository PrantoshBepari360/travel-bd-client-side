import React from 'react';

const Author = () => {
  return (
    <div>
      <div className="row my-5 w-75 mx-auto">
        <div className="card border-0 col-md-6">
          <div className="card-body px-2">
            <h5 className="card-title">Author</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing sapien id imperdiet ultricies morbi. Praesent non pulvinar aenean morbi volutpat nulla dictumst aliquet tempus. In euismod et netus et augue diam velit eu. Nisi hac nunc, vitae eu. Ultricies lectus ac sit pulvinar. Et neque non suscipit massa tristique amet mi pellentesque. Pulvinar placerat varius sed etiam vivamus neque, eros, ac, convallis. Mattis tincidunt pharetra, luctus duis.
            </p>
            <p className="cart-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget vestibulum viverra fames nullam eu eget luctus duis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, minima.</p>
            <h5 className="text-center">Contact</h5>
            <div className="row">
              <div className="text-center">
                <a href="#" className="card-link text-decoration-none text-dark"><i className="fas fa-envelope" aria-hidden="true"></i>
                  contact@devon.com</a>
                  <br/>
                <a href="#" className="card-link text-decoration-none text-dark"><i className="fas fa-phone-alt" aria-hidden="true"></i>
                  +8801911222222</a>
              </div>
            </div>
          </div> 
        </div>
        <div className="card border-0 col-md-6">
          <div className="card-body px-2">
            <img src="https://i.ibb.co/QHFpFSB/Prantosh.jpg" alt="somthing" className="w-100 h-auto mb-3"/>
            <h5 className="text-center">Follow</h5>
            <div className="row">
              <div className="text-center">
                <a href="#" className="card-link text-decoration-none text-success"><i className="fab fa-facebook" aria-hidden="true"></i></a>
                <a href="#" className="card-link text-decoration-none text-success"><i className="fab fa-twitter" aria-hidden="true"></i></a>
                <a href="#" className="card-link text-decoration-none text-success"><i className="fab fa-instagram" aria-hidden="true"></i></a>
                <a href="#" className="card-link text-decoration-none text-success"><i className="fab fa-youtube" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;