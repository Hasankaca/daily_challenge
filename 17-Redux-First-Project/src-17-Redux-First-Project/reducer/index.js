import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import searchReducer from "./searchReducer";

export const rootReducer = combineReducers({
  articlesState: articleReducer,
  searchState: searchReducer,
});
