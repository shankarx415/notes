import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import all Page Components
import BeeNotes from './pages/BeeNotes';
import EnglishNotes from './pages/EnglishNotes';
import ItNotes from './pages/ItNotes';
import CNotes from './pages/CNotes'; // <--- 1. Make sure this import is here

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Existing Routes */}
          <Route path="/" element={<BeeNotes />} />
          <Route path="/english" element={<EnglishNotes />} />
          <Route path="/it" element={<ItNotes />} />

          {/* New Route - This is what fixes the error */}
          <Route path="/c-programming" element={<CNotes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;