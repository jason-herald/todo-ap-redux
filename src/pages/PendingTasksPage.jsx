import React from "react";
import { useSelector } from "react-redux";
import TaskList from "../components/TaskList";

const PendingTasksPage = () => {
  const tasks = useSelector((state) => state.tasks);
  const pendingTasks = tasks.filter((task) => !task.completed);

  return (
    <div className="container">
      <TaskList tasks={pendingTasks} title="Pending Tasks" />
    </div>
  );
};

export default PendingTasksPage;
