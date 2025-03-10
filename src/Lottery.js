import React, { useContext } from 'react';
import { ParticipantsContext } from './ParticipantsContext';

function Lottery() {
  const { participants } = useContext(ParticipantsContext);
  const [winner, setWinner] = React.useState(null);

  // 只從「已投入抽獎箱」的名單中抽獎
  const enteredParticipants = participants.filter((p) => p.entered);
  const notEnteredParticipants = participants.filter((p) => !p.entered);

  const handleDraw = () => {
    if (enteredParticipants.length === 0) {
      alert('目前沒有可抽獎的參與者！');
      return;
    }
    const randomIndex = Math.floor(Math.random() * enteredParticipants.length);
    setWinner(enteredParticipants[randomIndex]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>抽獎系統</h1>
      
      { winner ? (
        <div>
          <h2>🎉 恭喜 {winner.name} 中獎！🎉</h2>
        </div>
      ) : (
        <button onClick={handleDraw}>開始抽獎</button>
      )}

      <h3>🟢 已投入抽獎箱的參與者</h3>
      <ul>
        {enteredParticipants.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>

      <h3>🔴 尚未投入的參與者</h3>
      <ul>
        {notEnteredParticipants.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Lottery;
