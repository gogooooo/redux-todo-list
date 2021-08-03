export const addTask = (taskdata) => {
  return { type: "ADD", payload: taskdata };
};

export const deleteTask = (id) => {
  return { type: "DELETE", payload: id };
};
