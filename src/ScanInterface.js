import React, { useState } from 'react';

function ScanInterface() {
  const [scannedId, setScannedId] = useState('');
  const [status, setStatus] = useState('');

  // 模擬掃描 QR Code 並更新資料庫中該參與者的狀態（設定 entered 為 true）
  const handleScan = async () => {
    try {
      // 這裡模擬 API 呼叫，實際上請替換成 PUT 或 PATCH 請求更新該參與者狀態
      console.log("更新參與者 ID：" + scannedId + " 為已加入抽獎箱");
      // 模擬成功後更新狀態提示
      setStatus("參與者 " + scannedId + " 已加入抽獎箱。");
    } catch (error) {
      console.error("更新錯誤：", error);
      setStatus("更新失敗");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>掃描 QR Code 加入抽獎箱</h1>
      <p>（模擬輸入參與者 ID）</p>
      <input
        type="text"
        value={scannedId}
        onChange={(e) => setScannedId(e.target.value)}
        placeholder="輸入參與者 ID"
      />
      <button onClick={handleScan}>確認加入抽獎箱</button>
      { status && <p>{status}</p> }
    </div>
  );
}

export default ScanInterface;
