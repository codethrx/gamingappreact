import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
//root reducer
import rootReducer from "./redux/main";
//Setting up redux
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
//Composing thunk via middleware for async calls
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
//React router v6
import { BrowserRouter } from "react-router-dom";
//Render to html
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
