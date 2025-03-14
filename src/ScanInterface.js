import React, { useState } from 'react';
import { supabase } from './supabase';
import QrScanner from 'qr-scanner';

function ScanQRCode() {
  const [scanResult, setScanResult] = useState('');
  
  const handleScan = async (result) => {
    if (!result) return;
    setScanResult(result);

    try {
      const participantData = JSON.parse(result);
      const { error } = await supabase
        .from('participants')
        .update({ entered: true })
        .eq('id', participantData.id);

      if (error) {
        console.error('更新失敗:', error.message);
      } else {
        alert('參與者已投入抽獎箱！');
      }
    } catch (err) {
      console.error('QR Code 格式錯誤:', err.message);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>掃描 QR Code</h1>
      <QrScanner onScan={handleScan} />
      <p>{scanResult && `掃描結果: ${scanResult}`}</p>
    </div>
  );
}

export default ScanQRCode;
