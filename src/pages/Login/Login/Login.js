import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { signInWithGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/home';

  const handelGoogleLogin = () => {
    signInWithGoogle()
    .then(result => {
      history.push(redirect_uri)
    })
  }
  
  return (
    <div>
      <div className="row my-5 w-75 mx-auto">
        <div className="card border-0 col-md-6 col-lg-7 col-xl-8">
          <div className="card-body px-2">
            <img
              className="w-75 h-auto"
              src="https://i.ibb.co/MZkLqLr/Screenshot-1.png"
              alt="signup"
            />
          </div>
        </div>
        <div className="card border-0 col-md-6 col-lg-5 col-xl-4">
          <div className="card-body px-2">
            <h2 className="m-0 text-center">Log In</h2>
            <div>
              <div className="form-group">
                <div className="m-0">
                  <label className="py-2"></label>
                  <div className="">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="your email"
                      id="email"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="py-2 mt-2"></label>
                <div className="">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password minimum 6 charecters"
                    id="subject"
                  />
                </div>
              </div>
              <div className="d-grid mx-auto">
                <button className="btn btn-primary mt-3">Log in</button>
              </div>
              <h2 className="col-sm-12">OR</h2>
              <div className="d-grid mx-auto">
                <button onClick={handelGoogleLogin} className="btn btn-outline-primary p-1">
                  Sign in with google
                </button>
              </div>
              <h5 className="text-center mt-3">
                Don’t have an account?
                <a href="#" className="ms-2">
                  Register
                </a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
