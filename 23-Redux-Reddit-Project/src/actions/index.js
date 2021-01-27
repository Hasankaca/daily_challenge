export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const INVALID_SUBREDDIT = "INVALID_SUBREDDIT";
export const CLEAR_LIST = "CLEAR_LIST";

export function receivePost(data) {
  return {
    type: "RECEIVE_POSTS",
    payload: data,
  };
}

export function invalidSubreddit() {
  return {
    type: "INVALID_SUBREDDIT",
  };
}

export function clearList() {
  return {
    type: "CLEAR_LIST",
  };
}

export function fetchPosts(subreddit) {
  return async (dispatch) => {
    try {
      const API_BASE = `https://www.reddit.com/r/${subreddit}.json`;
      const result = await fetch(API_BASE);
      const data = await result.json();
      // console.log(data.data.children[0].data);

      dispatch(receivePost(data.data.children));
    } catch (e) {
      dispatch(invalidSubreddit());
    }
  };
}
