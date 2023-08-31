import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/actions";
import "./TaskForm.css";

const TaskForm = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      dispatch(
        addTask({
          name: taskName,
          description: taskDescription,
          id: Date.now(),
          completed: false,
        })
      );
      setTaskName("");
      setTaskDescription("");
    }
  };

  return (
    <div className="task-form">
      <h2>Create a New Task</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="taskName">Task Name:</label>
        <input
          type="text"
          id="taskName"
          className="task-input"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />
        <label htmlFor="taskDescription">Task Description:</label>
        <textarea
          id="taskDescription"
          className="task-input"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <button type="submit" className="task-button">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
