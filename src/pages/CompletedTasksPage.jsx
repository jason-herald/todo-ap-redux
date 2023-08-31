import React from "react";
import { useSelector } from "react-redux";
import TaskList from "../components/TaskList";

const CompletedTasksPage = () => {
  const tasks = useSelector((state) => state.tasks);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="container">
      <h2>Completed Tasks</h2>
      <TaskList tasks={completedTasks} />
    </div>
  );
};

export default CompletedTasksPage;
