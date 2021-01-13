import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (

    <div className="container register">
      <div className="row">
        <div className="col-md-3 register-left">
          <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
          <h3 className="text-white font-weight-bold">Welcome</h3>
          <p className="text-white">TailorApp helps you to connect and manage your customers!</p>
          <Link to="/signup">
            <input type="submit" name="" value="signup" />
          </Link>
          <br />
        </div>
        <div className="col-md-9 register-right">
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <h3 className="register-heading font-weight-bold">Login To Your Account</h3>
              <div className="row register-form">
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder=" Enter Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="txtEmpPhone"
                      className="form-control"
                      placeholder=" Enter Password"
                    />
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label className="pl-2">Keep me logged In</label>
                  </div>
                  
                  <input type="submit" className="btnRegister" value="LogIn" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
