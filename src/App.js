import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Nokia from './components/Nokia';

/**
 * Main App component with routing configuration
 * Default route redirects to /nokia
 * @returns {JSX.Element} App component with routes
 */
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/nokia" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nokia" element={<Nokia />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
