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



// import React from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import RegistrationForm from './RegistrationForm';
// import ScanInterface from './ScanInterface';
// import Lottery from './Lottery';
// import { ParticipantsProvider } from './ParticipantsContext';

// function App() {
//   return (
//     <ParticipantsProvider>
//       <BrowserRouter>
//         <nav style={{ marginBottom: '20px' }}>
//           <Link to="/" style={{ marginRight: '10px' }}>登記頁面</Link>
//           <Link to="/scan" style={{ marginRight: '10px' }}>掃描頁面</Link>
//           <Link to="/lottery">抽獎系統</Link>
//         </nav>
//         <Routes>
//           <Route path="/" element={<RegistrationForm />} />
//           <Route path="/scan" element={<ScanInterface />} />
//           <Route path="/lottery" element={<Lottery />} />
//         </Routes>
//       </BrowserRouter>
//     </ParticipantsProvider>
//   );
// }

// export default App;




import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import Lottery from './Lottery';
import ScanInterface from './ScanInterface';
import AdminPanel from './AdminPanel';
function PrivateRoute({ element }) {
  const isAuthenticated = localStorage.getItem('adminAuth') === 'true';
  return isAuthenticated ? element : <Navigate to="/admin/login" />;
}

function App() {
  return (
    <Router>
      <Routes>
        {/* 前台：只提供登記功能 */}
        <Route path="/" element={<RegistrationForm />} />

        {/* 後台：需登入 */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<PrivateRoute element={<AdminDashboard />} />} />
        <Route path="/admin/lottery" element={<PrivateRoute element={<Lottery />} />} />
        <Route path="/admin/scan" element={<PrivateRoute element={<ScanInterface />} />} />
        <Route path="/admin/AdminPanel"  element={<PrivateRoute element={<AdminPanel />} />} />
        

        {/* 404 頁面 */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;

