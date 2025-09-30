import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import ExamStart from './pages/ExamStart';
import Login from './pages/Login';
import Management from './pages/Management';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/exam-start" element={<ExamStart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/management" element={<Management />} />
      </Routes>
    </Router>
  );
}

export default App;