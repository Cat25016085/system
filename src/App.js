import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import ScanInterface from './ScanInterface';
import Lottery from './Lottery';

function App() {
  return (
    <Router>
      <div>
        <nav style={{ marginBottom: '20px' }}>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
            <li><Link to="/">登記頁面</Link></li>
            <li><Link to="/scan">掃描頁面</Link></li>
            <li><Link to="/lottery">抽獎系統</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/scan" element={<ScanInterface />} />
          <Route path="/lottery" element={<Lottery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


