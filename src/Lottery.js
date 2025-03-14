import React, { useState, useEffect } from 'react';
import { supabase } from './supabase';

function Lottery() {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const fetchParticipants = async () => {
      const { data, error } = await supabase.from('participants').select('*');
      if (error) {
        console.error('讀取失敗:', error.message);
      } else {
        setParticipants(data);
      }
    };

    fetchParticipants();

    // 訂閱 Supabase 實時更新
    const subscription = supabase
      .channel('participants')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'participants' }, (payload) => {
        console.log('收到更新:', payload);
        fetchParticipants(); // 更新畫面
      })
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>抽獎系統</h1>

      <h2>已投入抽獎箱</h2>
      <ul>
        {participants.filter(p => p.entered).map(p => (
          <li key={p.id}>{p.name} - {p.contact}</li>
        ))}
      </ul>

      <h2>只有填資料未掃 ID</h2>
      <ul>
        {participants.filter(p => !p.entered).map(p => (
          <li key={p.id}>{p.name} - {p.contact}</li>
        ))}
      </ul>
    </div>
  );
}

export default Lottery;
