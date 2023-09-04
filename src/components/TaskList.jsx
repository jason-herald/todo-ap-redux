import React, { useState } from "react";
import Task from "./Task";
import "./TaskList.css";

const TaskList = ({ tasks, title, showFilters = true }) => {
  const [sortBy, setSortBy] = useState("none");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleClearFilters = () => {
    setStartDate("");
    setEndDate("");
  };
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const filteredTasks = tasks.filter((task) => {
    const dueDate = new Date(task.dueDate);
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (startDate && endDate) {
      return dueDate >= start && dueDate <= end;
    } else if (startDate) {
      return dueDate >= start;
    } else if (endDate) {
      return dueDate <= end;
    } else {
      return true;
    }
  });

  const sortedTasks = [...filteredTasks];

  if (sortBy === "dueDate") {
    sortedTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  } else if (sortBy === "priority") {
    sortedTasks.sort((a, b) => a.priority - b.priority);
  }

  return (
    <div className="task-list">
      <h2>{title}</h2>
      {showFilters && (
        <div className="sort-filter-section">
          <div>
            Sort by:
            <select value={sortBy} onChange={handleSortChange}>
              <option value="none">None</option>
              <option value="dueDate">Due Date</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div>
            Filter by due date:
            <input
              type="date"
              value={startDate}
              onChange={handleStartDateChange}
              placeholder="Start Date"
            />
            <input
              type="date"
              value={endDate}
              onChange={handleEndDateChange}
              placeholder="End Date"
            />
            <button
              className="clear-filter-button"
              onClick={handleClearFilters}
            >
              X
            </button>
          </div>
        </div>
      )}
      <div className="task-list-scrollable">
        {sortedTasks.length === 0 ? (
          <p>No tasks available.</p>
        ) : (
          sortedTasks.map((task) => <Task key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
};

export default TaskList;
