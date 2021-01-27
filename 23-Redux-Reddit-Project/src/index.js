import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/App";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
