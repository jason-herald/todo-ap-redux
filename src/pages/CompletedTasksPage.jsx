import React from "react";
import { useSelector } from "react-redux";
import TaskList from "../components/TaskList";

const CompletedTasksPage = () => {
  const tasks = useSelector((state) => state.tasks);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="container">
      <TaskList tasks={completedTasks} title="Completed Tasks" />
    </div>
  );
};

export default CompletedTasksPage;
