const INITIAL_STATE = { counter: 0 };

function countReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}

export default countReducer;
