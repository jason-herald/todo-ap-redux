import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { deleteTask, toggleTask, updateTask } from "../store/actions";
import "./Task.css";
import { priorityToString, getPriorityClass } from "../helpers/priority";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({
    name: task.name,
    description: task.description,
    dueDate: task.dueDate,
    priority: task.priority,
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedTask({ name: task.name, description: task.description });
  };

  const handleSaveEdit = () => {
    if (
      editedTask.name.trim() === "" ||
      editedTask.dueDate === "" ||
      editedTask.priority === ""
    ) {
      alert("Name, Due Date, and Priority cannot be empty.");
      return;
    }
    dispatch(
      updateTask({
        taskId: task.id,
        updatedTask: editedTask,
        createdDate: new Date().toISOString(),
      })
    );
    setIsEditing(false);
  };

  return (
    <div className={`task ${task.completed ? "completed-task" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch(toggleTask(task.id))}
        className="task-checkbox"
      />
      <div className="task-details">
        {isEditing ? (
          <div className="editable-section">
            <input
              type="text"
              value={editedTask.name}
              onChange={(e) =>
                setEditedTask({ ...editedTask, name: e.target.value })
              }
              className="editable-input"
            />
            <textarea
              value={editedTask.description}
              onChange={(e) =>
                setEditedTask({ ...editedTask, description: e.target.value })
              }
              className="editable-textarea"
            />
            <input
              type="date"
              value={editedTask.dueDate}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) =>
                setEditedTask({ ...editedTask, dueDate: e.target.value })
              }
              className="editable-input"
            />
            <select
              value={editedTask.priority}
              onChange={(e) =>
                setEditedTask({
                  ...editedTask,
                  priority: Number(e.target.value),
                })
              }
              className="editable-select"
            >
              <option value={0}>High</option>
              <option value={1}>Medium</option>
              <option value={2}>Low</option>
            </select>
            <button
              onClick={handleSaveEdit}
              className="editable-button save-button"
            >
              Save
            </button>
            <button
              onClick={handleCancelEdit}
              className="editable-button cancel-button"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="editable-section">
            <span
              className={`task-name ${
                task.completed ? "completed-task-name" : ""
              }`}
            >
              {task.name}
            </span>

            <p className="task-description">{task.description}</p>
            <p className="created-date">Created: {task.createdDate}</p>
            <p className="due-date">Due: {task.dueDate}</p>
            <p className={`priority ${getPriorityClass(task.priority)}`}>
              Priority: {priorityToString(task.priority)}
            </p>

            <button
              onClick={handleEdit}
              className="edit-button"
              disabled={task.completed}
            >
              Edit
            </button>
          </div>
        )}
        <button
          onClick={() => dispatch(deleteTask(task.id))}
          className="delete-button"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
