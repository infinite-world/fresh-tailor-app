import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import Navbar from "../Home/homeNavbar/homenavbar";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <div class="container register">
        <div class="row">
          <div class="col-md-3 register-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
            <h3 className="white-colors-class font-weight-bold">Welcome</h3>
            <p className="white-colors-class">
              TailorApp helps you to connect and manage your customers!
            </p>
            <Link to="/login">
              <input type="submit" name="" value="Login" />
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
                <h3 class="register-heading">Register as a Tailor</h3>
                <div class="row register-form">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder=" First Name *"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        placeholder=" Your Email "
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control"
                        placeholder=" Password "
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder=" Last Name "
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="number"
                        minlength="10"
                        maxlength="10"
                        name="txtEmpPhone"
                        class="form-control"
                        placeholder=" Your Phone "
                      />
                    </div>

                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control"
                        placeholder=" Confirm Password"
                      />
                    </div>
                    <div class="form-group">
                      <div class="maxl">
                        <label class="radio inline">
                          <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked
                          />
                          <span> Male </span>
                        </label>
                        <label class="radio inline pl-2">
                          <input type="radio" name="gender" value="female" />
                          <span> Female </span>
                        </label>
                      </div>
                    </div>
                    <input type="submit" class="btnRegister" value="Register" />
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

export default Signup;
