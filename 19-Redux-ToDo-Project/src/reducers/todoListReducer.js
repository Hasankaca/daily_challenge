import { ADD, EDIT, DELETE } from "../action/updateList";

const initialState = [];

export const todoListReducer = (state = initialState, action) => {
  let newState = [...state];
  switch (action.type) {
    case ADD:
      return [...state, action.content];
    case EDIT:
      // return [...state, action.content];
      newState[action.index] = action.content;
      return newState;
    case DELETE:
      newState.splice(action.index, 1);
      return newState;

    default:
      return state;
  }
};
