import { createReducer } from "@reduxjs/toolkit";
import { addTask, updateTask, deleteTask, toggleTask } from "./actions";

const initialState = {
  tasks: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTask, (state, action) => {
      state.tasks.push(action.payload);
    })
    .addCase(updateTask, (state, action) => {
      const { taskId, updatedTask } = action.payload;
      const taskToUpdate = state.tasks.find((task) => task.id === taskId);
      if (taskToUpdate) {
        Object.assign(taskToUpdate, updatedTask);
      }
    })
    .addCase(deleteTask, (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    })

    .addCase(toggleTask, (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    });
});

export default reducer;
