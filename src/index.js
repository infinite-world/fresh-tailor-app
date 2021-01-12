import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import MyStore from "./Store/Store/store";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
import 'mdbreact/dist/css/mdb.css';
import 'react-phone-input-2/lib/style.css';
import 'react-toastify/dist/ReactToastify.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

ReactDom.render(
    <Provider store={MyStore}>
        <App />
    </Provider>
    , document.getElementById("root"));