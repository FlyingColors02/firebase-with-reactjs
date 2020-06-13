import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Provider} from "react-redux";
import {createStore,applyMiddleware} from "redux";
import App from "./app";
import thunk from "redux-thunk";
import storeIndex from "./store/index";
import { BrowserRouter } from "react-router-dom";
let store=createStore(storeIndex,applyMiddleware(thunk));
ReactDOM.render(
    
    <Provider store={store}>
        <BrowserRouter >
        
        <App/>
        
        </BrowserRouter>    
    </Provider>

,document.getElementById("root"));