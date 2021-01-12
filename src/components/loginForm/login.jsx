import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import Navbar from "../Home/homeNavbar/homenavbar";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div class="container register">
        <div class="row">
          <div class="col-md-3 register-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
            <h3 className="white-colors-class font-weight-bold">Welcome</h3>
            <p className="white-colors-class">TailorApp helps you to connect and manage your customers!</p>
            <Link to="/signup">
              <input type="submit" name="" value="signup" />
            </Link>
            <br />
          </div>
          <div class="col-md-9 register-right">
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h3 class="register-heading">Login To Your Account</h3>
                <div class="row register-form">
                  <div class="col-md-12">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        placeholder=" Enter Email"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        name="txtEmpPhone"
                        class="form-control"
                        placeholder=" Enter Password"
                      />
                    </div>
                    <div>
                      <input type="checkbox" />
                      <label className="pl-2">Keep me logged In</label>
                    </div>

                    <input type="submit" class="btnRegister" value="LogIn" />
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

export default Login;
