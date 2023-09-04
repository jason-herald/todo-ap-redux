import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";

import HomePage from "./pages/HomePage";
import CompletedTasksPage from "./pages/CompletedTasksPage";
import PendingTasksPage from "./pages/PendingTasksPage";
import TasksDueTodayPage from "./pages/TasksDueTodayPage";
import Navbar from "./components/Navbar";
import store from "./store/store";
import "./styles.css";
import "./index.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/pending" element={<PendingTasksPage />} />
              <Route path="/completed" element={<CompletedTasksPage />} />
              <Route path="/due-today" element={<TasksDueTodayPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
