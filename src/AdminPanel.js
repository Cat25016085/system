import React, { useState } from 'react';
import { supabase } from './supabase';

function AdminPanel() {
  const [participants, setParticipants] = useState([]);
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    const { data } = await supabase.from('admins').select('*').eq('password', password);
    if (data.length > 0) setLoggedIn(true);
  };

  const handleClearAll = async () => {
    if (!window.confirm('確定要清除所有資料？')) return;
    await supabase.from('participants').delete().neq('id', '');
  };

  return (
    <div>
      {!loggedIn ? (
        <div>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin}>登入</button>
        </div>
      ) : (
        <div>
          <button onClick={handleClearAll}>清除所有資料</button>
        </div>
      )}
    </div>
  );
}

export default AdminPanel;