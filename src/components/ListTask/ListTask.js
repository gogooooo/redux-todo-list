import React from "react";
import Task from "../Task/Task";
import { useSelector } from "react-redux";

const ListTask = () => {
  const todos = useSelector((state) => state.todo.todos);
  const renderList = todos.map((todo) => (
    <Task key={todo.id} desc={todo.desc} id={todo.id} isDone={todo.isDone} />
  ));

  return <div>{renderList}</div>;
};

export default ListTask;
