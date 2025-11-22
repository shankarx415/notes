import React from 'react';
// CHANGE: Import HashRouter instead of BrowserRouter
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Import Pages
import EnglishNotes from './pages/EnglishNotes';
import ItNotes from './pages/ItNotes';
import CNotes from './pages/CNotes';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Default Home Page */}
          <Route path="/" element={<EnglishNotes />} />
          
          {/* Specific Pages */}
          <Route path="/english" element={<EnglishNotes />} />
          <Route path="/it" element={<ItNotes />} />
          <Route path="/c-programming" element={<CNotes />} />

          {/* Redirect unknown URLs back to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;