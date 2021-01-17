export const ADD = "ADD";
export const EDIT = "EDIT";
export const DELETE = "DELETE";

export function addTodo(content) {
  return {
    type: ADD,
    content: content,
  };
}
export function editTodo(index, content) {
  return {
    type: EDIT,
    // payload: { index:index, content: content, },
    index: index,
    content: content,
  };
}
export function deleteTodo(index) {
  return {
    type: DELETE,
    index: index,
  };
}
