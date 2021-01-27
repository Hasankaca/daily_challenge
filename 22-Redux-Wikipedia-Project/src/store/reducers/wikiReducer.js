import { combineReducers } from "redux";
import { SEARCH_DATA, CLEAR_RESULTS } from "../actions/fetchWiki";

export default function wikiReducer(
  state = ["", [], [], []],
  { type, payload }
) {
  switch (type) {
    case SEARCH_DATA:
      return payload;
    case CLEAR_RESULTS:
      return ["", [], [], []];
    default:
      return state;
  }
}

export const reducers = combineReducers({ wikies: wikiReducer });
