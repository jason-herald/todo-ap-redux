import React from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { useSelector } from "react-redux";

const HomePage = () => {
  const tasks = useSelector((state) => state.tasks);
  console.log(tasks);
  return (
    <>
      <TaskForm />
      <TaskList tasks={tasks} title="All Tasks" />
    </>
  );
};

export default HomePage;
