import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from "./Store/Store/store";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
import 'mdbreact/dist/css/mdb.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

ReactDom.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
    , document.getElementById("root")
);
