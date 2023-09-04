import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/actions";
import "./TaskForm.css";

const TaskForm = () => {
  const [state, setState] = useState({
    taskName: "",
    taskDescription: "",
    dueDate: "",
    priority: 0,
  });

  const dispatch = useDispatch();
  const updateState = (elementName, value) => {
    setState({ ...state, [elementName]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.taskName.trim()) {
      dispatch(
        addTask({
          name: state.taskName,
          description: state.taskDescription,
          id: Date.now(),
          dueDate: state.dueDate,
          completed: false,
          priority: state.priority,
          createdDate: new Date().toISOString(),
        })
      );
      setState({
        taskName: "",
        taskDescription: "",
        dueDate: "",
        priority: 0,
      });
    }
  };

  return (
    <div className="task-form">
      <h2>Create a New Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="taskName">Task Name:</label>
          <input
            type="text"
            name="taskName"
            id="taskName"
            className="task-input"
            value={state.taskName}
            onChange={(e) => updateState(e.target.name, e.target.value)}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="taskDescription">Task Description:</label>
          <textarea
            name="taskDescription"
            id="taskDescription"
            className="task-input"
            value={state.taskDescription}
            onChange={(e) => updateState(e.target.name, e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="dueDate">Due Date:</label>
          <input
            type="date"
            name="dueDate"
            id="dueDate"
            value={state.dueDate}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => updateState(e.target.name, e.target.value)}
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="priority">Priority:</label>
          <select
            id="priority"
            name="priority"
            value={state.priority}
            onChange={(e) => updateState(e.target.name, Number(e.target.value))}
            required
          >
            <option value={0}>High</option>
            <option value={1}>Medium</option>
            <option value={2}>Low</option>
          </select>
        </div>
        <button type="submit" className="task-button">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
