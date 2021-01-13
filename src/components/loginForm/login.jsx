import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { LoginUser } from "./loginFunctions";

const Login = () => {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);

  const sendLoginUserData = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError(true);
      setTimeout(() => {
        setError(false)
      }, 5000);
    }
    else {
      let data = { email, password }
      LoginUser(data);
    }
  }

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
          {/* alert */}
          <div className={error ? "alert alert-danger w-50 mx-auto d-block animate__animated animate__fadeIn" : "d-none"} role="alert">
            <i className="fa fa-exclamation-triangle mr-2" aria-hidden="true"></i>
            Fields, must not be empty...
            </div>
          {/* alert-end */}
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
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="txtEmpPhone"
                      className="form-control"
                      placeholder=" Enter Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <input type="submit" className="btnRegister" value="LogIn" onClick={sendLoginUserData} />
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
