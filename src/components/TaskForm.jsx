import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/actions";
import "./TaskForm.css";

const TaskForm = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState(0);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      dispatch(
        addTask({
          name: taskName,
          description: taskDescription,
          id: Date.now(),
          dueDate: dueDate,
          completed: false,
          priority: priority,
          createdDate: new Date().toISOString(),
        })
      );
      setTaskName("");
      setTaskDescription("");
      setDueDate("");
      setPriority(0);
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
        <label htmlFor="dueDate">Due Date:</label>
        <input
          type="date"
          id="dueDate"
          value={dueDate}
          min={new Date().toISOString().split("T")[0]}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
        <label htmlFor="priority">Priority:</label>
        <select
          id="priority"
          value={priority}
          onChange={(e) => setPriority(Number(e.target.value))}
          required
        >
          <option value={0}>High</option>
          <option value={1}>Medium</option>
          <option value={2}>Low</option>
        </select>
        <button type="submit" className="task-button">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
