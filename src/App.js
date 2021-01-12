import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/loginForm/login";
import Signup from "./components/signupFrom/signup";
// components import

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
