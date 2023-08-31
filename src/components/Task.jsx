import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTask, updateTask } from "../store/actions";
import "./Task.css";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({
    name: task.name,
    description: task.description,
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedTask({ name: task.name, description: task.description });
  };

  const handleSaveEdit = () => {
    dispatch(updateTask({ taskId: task.id, updatedTask: editedTask }));
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
            <button onClick={handleEdit} className="edit-button">
              Edit
            </button>
          </div>
        )}
      </div>
      <button
        onClick={() => dispatch(deleteTask(task.id))}
        className="delete-button"
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
