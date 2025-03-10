import React, { useState, useEffect } from 'react';

function Lottery() {
  const [participants, setParticipants] = useState([]);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    // 模擬 API 呼叫，取得已加入抽獎箱的參與者資料（entered: true）
    // 以下是 dummy 資料，實際應從後端取得
    const dummyParticipants = [
      { id: "1628000000000", name: "Alice" },
      { id: "1628000000001", name: "Bob" },
      { id: "1628000000002", name: "Charlie" }
    ];
    setParticipants(dummyParticipants);
  }, []);

  // 隨機抽獎邏輯
  const handleDraw = () => {
    if (participants.length === 0) return;
    const randomIndex = Math.floor(Math.random() * participants.length);
    setWinner(participants[randomIndex]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>抽獎系統</h1>
      { winner ? (
        <div>
          <h2>恭喜 {winner.name} 中獎！</h2>
        </div>
      ) : (
        <button onClick={handleDraw}>開始抽獎</button>
      )}
      <h3>抽獎箱參與者</h3>
      <ul>
        {participants.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Lottery;
