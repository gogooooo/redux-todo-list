/* eslint-disable import/no-anonymous-default-export */
const initState = {
  todos: [],
};
export default (state = initState, action) => {
  switch (action.type) {
    case "DELETE":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "ADD":
      let newItem = {
        desc: action.payload,
        id: Date.now(),
        isDone: false,
      };
      return { ...state, todos: state.todos.concat(newItem) };
    default:
      return state;
  }
};
