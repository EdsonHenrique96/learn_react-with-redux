import React from "react";
import ReactDOM from "react-dom";
import App from "./Field";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import fieldReducer from "./reducers/fieldReducer";

const reducers = combineReducers({
  field: fieldReducer
});

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
