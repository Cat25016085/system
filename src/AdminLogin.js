import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === "your_admin_password") { // 這裡換成你的密碼
      localStorage.setItem('adminAuth', 'true');
      navigate('/admin');
    } else {
      alert("密碼錯誤！");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>管理員登入</h1>
      <input
        type="password"
        placeholder="輸入管理密碼"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>登入</button>
    </div>
  );
}

export default AdminLogin;
