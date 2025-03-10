// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import RegistrationForm from './RegistrationForm';
// import ScanInterface from './ScanInterface';
// import Lottery from './Lottery';

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav style={{ marginBottom: '20px' }}>
//           <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
//             <li><Link to="/">登記頁面</Link></li>
//             <li><Link to="/scan">掃描頁面</Link></li>
//             <li><Link to="/lottery">抽獎系統</Link></li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path="/" element={<RegistrationForm />} />
//           <Route path="/scan" element={<ScanInterface />} />
//           <Route path="/lottery" element={<Lottery />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import ScanInterface from './ScanInterface';
import Lottery from './Lottery';
import { ParticipantsProvider } from './ParticipantsContext';

function App() {
  return (
    <ParticipantsProvider>
      <BrowserRouter>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '10px' }}>登記頁面</Link>
          <Link to="/scan" style={{ marginRight: '10px' }}>掃描頁面</Link>
          <Link to="/lottery">抽獎系統</Link>
        </nav>
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/scan" element={<ScanInterface />} />
          <Route path="/lottery" element={<Lottery />} />
        </Routes>
      </BrowserRouter>
    </ParticipantsProvider>
  );
}

export default App;
