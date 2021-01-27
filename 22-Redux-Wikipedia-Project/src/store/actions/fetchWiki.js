export const SEARCH_DATA = "SEARCH_DATA";
export const CLEAR_RESULTS = "CLEAR_RESULTS";

export function sendResults(data) {
  return {
    type: "SEARCH_DATA",
    payload: data,
  };
}

export function getWikies(searchValue) {
  return async (dispatch) => {
    try {
      const api = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchValue}&format=json&origin=*&limit=10`;
      const result = await fetch(api);
      const data = await result.json();
      console.log(data.error);
      if (data.error) {
        dispatch(clearResults());
      } else {
        dispatch(sendResults(data));
      }
    } catch (e) {
      dispatch(clearResults());
    }
  };
}

export function clearResults() {
  return {
    type: CLEAR_RESULTS,
  };
}
