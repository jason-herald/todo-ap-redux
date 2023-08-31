import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CompletedTasksPage from "./pages/CompletedTasksPage";
import PendingTasksPage from "./pages/PendingTasksPage";
import "./styles.css";
import "./index.css";

const App = () => {
  return (
    <Router>
      <div className="container">
        <h1 className="header">TODO App</h1>
        <nav>
          <Link to="/" className="nav-link">
            All Tasks
          </Link>
          <Link to="/pending" className="nav-link">
            Pending Tasks
          </Link>
          <Link to="/completed" className="nav-link">
            Completed Tasks
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pending" element={<PendingTasksPage />} />
          <Route path="/completed" element={<CompletedTasksPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
