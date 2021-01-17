import { createStore } from "redux";
import { todoListReducer } from "../reducers/todoListReducer";

export const store = createStore(
  todoListReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
