import React from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { useSelector } from "react-redux";

const HomePage = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <>
      <div className="home-container">
        <div className="add-task">
          <TaskForm />
        </div>
        <TaskList tasks={tasks} title="All Tasks" />
      </div>
    </>
  );
};

export default HomePage;
