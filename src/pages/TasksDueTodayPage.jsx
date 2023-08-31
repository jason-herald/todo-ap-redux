import React from "react";
import { useSelector } from "react-redux";
import Task from "../components/Task";

const TasksDueTodayPage = () => {
  const tasks = useSelector((state) => state.tasks);

  const today = new Date();
  today.setHours(5, 30, 0, 0);
  console.log(today);

  const tasksDueToday = tasks.filter((task) => {
    const dueDate = new Date(task.dueDate);
    console.log(dueDate);
    return dueDate.getTime() === today.getTime();
  });

  return (
    <div>
      <h2>Tasks Due Today</h2>
      {tasksDueToday.length === 0 ? (
        <p>No tasks are due today.</p>
      ) : (
        tasksDueToday.map((task) => <Task key={task.id} task={task} />)
      )}
    </div>
  );
};

export default TasksDueTodayPage;
