import React from "react";
import "./Task.css";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../action";
const Task = ({ desc, id, isDone }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="item my-3">
      <p className="text-muted">{desc}</p>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Task;
