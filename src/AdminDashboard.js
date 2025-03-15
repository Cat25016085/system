import React from 'react';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>管理後台</h1>
      <ul>
        <li><Link to="/admin/lottery">查看抽獎箱</Link></li>
        <li><Link to="/admin/scan">掃描 QR Code</Link></li>
      </ul>
      <button onClick={() => {
        localStorage.removeItem('adminAuth');
        window.location.href = "/admin/login";
      }}>登出</button>
    </div>
  );
}

export default AdminDashboard;
