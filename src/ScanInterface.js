import React, { useEffect, useRef, useState } from 'react';
import QrScanner from 'qr-scanner';
import { supabase } from './supabase';

function ScanInterface() {
  const videoRef = useRef(null);
  const [scannedId, setScannedId] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const scanner = new QrScanner(videoRef.current, async result => {
      if (result) {
        scanner.stop();
        handleScan(result.data);
      }
    });

    scanner.start().catch(err => setMessage(`錯誤: ${err.message}`));

    return () => scanner.destroy();
  }, []);

  const handleScan = async (id) => {
    setScannedId(id);
    setMessage(`掃描成功: ${id}`);

    // 更新 Supabase，將 entered 設為 true
    const { error } = await supabase
      .from('participants')
      .update({ entered: true })
      .eq('id', id);

    if (error) {
      setMessage(`更新失敗: ${error.message}`);
    } else {
      setMessage(`✅ 參與者 ${id} 成功加入抽獎箱！`);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>QR Code 掃描</h1>
      <video ref={videoRef} style={{ width: '300px', height: '300px' }} />
      <p>{message}</p>
    </div>
  );
}

export default ScanInterface;
