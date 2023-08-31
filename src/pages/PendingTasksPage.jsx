import React from "react";
import { useSelector } from "react-redux";
import TaskList from "../components/TaskList";

const PendingTasksPage = () => {
  const tasks = useSelector((state) => state.tasks);
  const pendingTasks = tasks.filter((task) => !task.completed);

  return (
    <div className="container">
      <h2>Pending Tasks</h2>
      <TaskList tasks={pendingTasks} />
    </div>
  );
};

export default PendingTasksPage;
