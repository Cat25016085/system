import React, { useState, useContext } from 'react';
import { ParticipantsContext } from './ParticipantsContext';

function ScanInterface() {
  const { participants, markAsEntered } = useContext(ParticipantsContext);
  const [scannedId, setScannedId] = useState('');
  const [message, setMessage] = useState('');

  const handleScan = () => {
    const participant = participants.find((p) => p.id === scannedId);

    if (participant) {
      if (participant.entered) {
        setMessage(`參與者 ${participant.name} 已經投入抽獎箱！`);
      } else {
        markAsEntered(scannedId);
        setMessage(`成功將 ${participant.name} 投入抽獎箱！`);
      }
    } else {
      setMessage('找不到對應的參與者 ID');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>掃描 QR Code</h1>
      <input
        type="text"
        placeholder="輸入掃描到的 ID"
        value={scannedId}
        onChange={(e) => setScannedId(e.target.value)}
      />
      <button onClick={handleScan}>確認投入抽獎箱</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ScanInterface;
