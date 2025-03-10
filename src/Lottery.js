import React, { useState, useEffect } from 'react';

const Lottery = () => {
  // 參與者名單，這裡用 dummy 資料作示範
  const [participants, setParticipants] = useState([]);
  const [winner, setWinner] = useState(null);

  // 模擬從後端載入參與者資料
  useEffect(() => {
    // 假資料：實際上可從後端 API 取得
    const dummyParticipants = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
      { id: 4, name: "David" }
    ];
    setParticipants(dummyParticipants);
  }, []);

  // 抽獎邏輯：隨機選取一位參與者作為得獎者
  const handleDraw = () => {
    if (participants.length === 0) return;
    const randomIndex = Math.floor(Math.random() * participants.length);
    setWinner(participants[randomIndex]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>抽獎系統</h1>
      
      {/* 顯示抽獎結果 */}
      { winner ? (
        <div style={{ marginBottom: '20px' }}>
          <h2>恭喜 {winner.name} 中獎！</h2>
        </div>
      ) : (
        <div style={{ marginBottom: '20px' }}>
          <h2>尚未抽獎</h2>
          <button onClick={handleDraw}>開始抽獎</button>
        </div>
      )}

      {/* 顯示參與者名單 */}
      <h3>參與者名單</h3>
      <ul>
        {participants.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Lottery;
