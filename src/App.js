import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// components import
import Login from "./components/loginForm/login";
import Signup from "./components/signupFrom/signup";
import Navbar from "./components/Home/homeNavbar/homenavbar";
import Loader from "./components/Loader/Loader";
import Toast from "./components/Toaster/Toast";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <Loader />
        <Toast />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
