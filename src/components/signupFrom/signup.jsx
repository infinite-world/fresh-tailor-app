import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./signup.css";
import { RegisterUser } from "./signupFunctions";
import { connect } from "react-redux";

const Signup = ({ loggedinUser }) => {
  const [userName, setUserName] = useState(null);
  const [shopName, setShopName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [gender, setGender] = useState('male');
  const [error, setError] = useState(false);

  const sendRegisterUserData = (event) => {
    event.preventDefault();
    if (!userName || !shopName || !email || !phone || !password || !confirmPassword || !gender) {
      setError(true);
      setTimeout(() => {
        setError(false)
      }, 5000);
    }
    else {
      let data = { userName, shopName, email, password, phone, gender }
      RegisterUser(data);
    }
  }

  return <React.Fragment>
    {
      loggedinUser ?
        <Redirect to="/dashboard" />
        :
        <div className="container register">
          <div className="row">
            <div className="col-md-3 register-left">
              <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
              <h3 className="text-white font-weight-bold">Welcome</h3>
              <p className="text-white">You are 30 seconds away from setting your own tailor shop!</p>
              <Link to="/login">
                <input type="submit" name="" value="Login" />
              </Link>
              <br />
            </div>
            <div className="col-md-9 register-right position-relative">
              {/* alert */}
              <div id="alert" className={error ? "alert alert-danger w-50 mx-auto d-block animate__animated animate__fadeIn" : "d-none"} role="alert">
                <i className="fa fa-exclamation-triangle mr-2" aria-hidden="true"></i>
            All fields must be required...!
            </div>
              {/* alert-end */}
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <h3 className="register-heading font-weight-bold">Register as a Tailor</h3>
                  <div className="row register-form">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          id="user"
                          type="text"
                          className="form-control"
                          placeholder=" User Name "
                          onChange={(e) => setUserName(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder=" Your Email "
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder=" Password "
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=" Shop Name "
                          onChange={(e) => setShopName(e.target.value)}
                        />
                      </div>
                      <div className="form-group d-flex">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="inputGroup-sizing-sm">+92</span>
                        </div>
                        <input onChange={(e) => setPhone(e.target.value)} type="number" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                      </div>

                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder=" Confirm Password"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <div className="radio">
                          <div>
                            <label className="mr-2"><input onChange={(e) => setGender('male')} className="mr-1 text-muted" type="radio" name="optradio" defaultChecked />Male</label>
                            <label><input onChange={(e) => setGender('female')} className="mr-1 text-muted" type="radio" name="optradio" />Female</label>
                          </div>
                        </div>
                        <input type="submit" className="btnRegister" value="Register" onClick={sendRegisterUserData} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    }
  </React.Fragment>
};

function mapStateToProps(state) {
  return {
    loggedinUser: state.UserReducer.user
  }
}

export default connect(mapStateToProps, null)(Signup);