import { createStore, applyMiddleware } from "redux";
import wikiReducer from "./reducers/wikiReducer";
import reducers from "./reducers/wikiReducer";
import thunk from "redux-thunk";

export const store = createStore(reducers, applyMiddleware(thunk));
