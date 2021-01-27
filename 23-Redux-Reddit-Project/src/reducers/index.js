import { combineReducers } from "redux";
import { INVALID_SUBREDDIT, RECEIVE_POSTS, CLEAR_LIST } from "../actions";

const initialState = {
  posts: [],
  lastUpdated: null,
};

export default function redditReducer(state = initialState, { type, payload }) {
  switch (type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        posts: payload,
        lastUpdated: new Date(),
      };
    case INVALID_SUBREDDIT:
      return initialState;
    case CLEAR_LIST:
      return initialState;
    default:
      return state;
  }
}

export const rootReducer = combineReducers({ redditReducer });
