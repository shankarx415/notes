import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import BeeNotes from './pages/BeeNotes';
import EnglishNotes from './pages/EnglishNotes';
import ItNotes from './pages/ItNotes';
import CNotes from './pages/CNotes';

function App() {
  return (
    <Router basename="/notes">
      <div className="App">
        <Routes>
          {/* Default route for /notes/ */}
          <Route index element={<BeeNotes />} />

          <Route path="/english" element={<EnglishNotes />} />
          <Route path="/it" element={<ItNotes />} />
          <Route path="/c-programming" element={<CNotes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
