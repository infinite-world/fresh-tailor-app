import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// components import
import Signup from "./components/SignupForm/Signup";
import Login from "./components/LoginForm/Login";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default App
