import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import reducer from "./store/reducer";
import reducerA from "./store/reducerA";
import reducerB from "./store/reducerB";

const rootReducers = combineReducers({
  rA: reducerA,
  rB: reducerB
});
const store = createStore(rootReducers);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
