import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
