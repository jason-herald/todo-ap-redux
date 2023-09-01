import React from "react";
import { useSelector } from "react-redux";
import TaskList from "../components/TaskList";

const TasksDueTodayPage = () => {
  const tasks = useSelector((state) => state.tasks);

  const today = new Date();
  today.setHours(5, 30, 0, 0);

  const tasksDueToday = tasks.filter((task) => {
    const dueDate = new Date(task.dueDate);
    console.log(dueDate);
    return dueDate.getTime() === today.getTime();
  });

  return (
    <div className="container">
      <TaskList
        tasks={tasksDueToday}
        showFilters={false}
        title="Tasks Due Today"
      />
    </div>
  );
};

export default TasksDueTodayPage;
