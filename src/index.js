import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Provider} from "react-redux";
import {createStore,applyMiddleware} from "redux";
import App from "./app";
import thunk from "redux-thunk";
import storeIndex from "./store/index";
let store=createStore(storeIndex,applyMiddleware(thunk));
ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>
,document.getElementById("root"));