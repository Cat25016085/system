import React, { useState, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { supabase } from './supabase';
import { v4 as uuidv4 } from 'uuid';

function RegistrationForm() {
  const [formData, setFormData] = useState({ name: '', contact: '' });
  const [submitted, setSubmitted] = useState(false);
  const [qrValue, setQrValue] = useState('');
  const [entryNumber, setEntryNumber] = useState(null);
  const [participantId, setParticipantId] = useState(null);
  const [deviceId, setDeviceId] = useState(null);
  const [matchedData, setMatchedData] = useState(null); // 相符的資料
  const [confirming, setConfirming] = useState(false); // 是否進行確認

  useEffect(() => {
    let storedDeviceId = localStorage.getItem('deviceId');
    if (!storedDeviceId) {
      storedDeviceId = uuidv4();
      localStorage.setItem('deviceId', storedDeviceId);
    }
    setDeviceId(storedDeviceId);
    checkExistingUser(storedDeviceId);
  }, []);

  // 🔹 檢查設備 ID 或 姓名 / 聯絡方式 是否已登記
  const checkExistingUser = async (deviceId) => {
    const { data, error } = await supabase
      .from('participants')
      .select('*')
      .or(`device_id.eq.${deviceId},name.eq.${formData.name},contact.eq.${formData.contact}`)
      .maybeSingle();

    if (!error && data) {
      setMatchedData(data); // 存入相符資料
      setConfirming(true); // 進入確認狀態
    }
  };

  // 🔹 確認是使用者本人
  const handleConfirm = async () => {
    if (matchedData) {
      setParticipantId(matchedData.id);
      fetchEntryNumber(matchedData.id);
      setSubmitted(true);
    }
  };

  // 🔹 取得抽獎序號
  const fetchEntryNumber = async (id) => {
    const { data, error } = await supabase
      .from('participants')
      .select('id')
      .order('id', { ascending: true });

    if (error) {
      console.error('讀取失敗:', error.message);
      return;
    }

    const index = data.findIndex((p) => p.id === id);
    if (index !== -1) {
      setEntryNumber(index + 1);
      setQrValue(JSON.stringify({ id, entry: index + 1 }));
    }
  };

  // 🔹 提交表單
  const handleSubmit = async () => {
    // 再次檢查是否有相符資料
    const { data: existingData, error: existingError } = await supabase
      .from('participants')
      .select('*')
      .or(`name.eq.${formData.name},contact.eq.${formData.contact}`)
      .maybeSingle();

    if (!existingError && existingData) {
      setMatchedData(existingData);
      setConfirming(true);
      return;
    }

    // 若無重複，則新增資料
    const { data, error } = await supabase
      .from('participants')
      .insert([{ 
        name: formData.name, 
        contact: formData.contact, 
        device_id: deviceId
      }])
      .select('id')
      .single();

    if (error) {
      console.error('資料存入失敗:', error.message);
      return;
    }

    setParticipantId(data.id);
    fetchEntryNumber(data.id);
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>抽獎登記</h1>
      
      {/* 🔹 確認畫面 */}
      {confirming && matchedData && (
        <div>
          <h2>發現相符的資料，請確認是否為您？</h2>
          <p>姓名：{matchedData.name}</p>
          <p>聯絡方式：{matchedData.contact}</p>
          <button onClick={handleConfirm}>是的，這是我</button>
          <button onClick={() => setConfirming(false)}>不是，返回修改</button>
        </div>
      )}

      {/* 🔹 已登記成功 */}
      {submitted ? (
        <div>
          <h2>登記成功！</h2>
          <p>您的抽獎序號：<strong>{entryNumber}</strong></p>
          <QRCodeCanvas value={qrValue} />
        </div>
      ) : (
        !confirming && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div style={{ marginBottom: '10px' }}>
              <label>姓名：</label>
              <input type="text" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label>聯絡方式：</label>
              <input type="text" name="contact" value={formData.contact} onChange={(e) => setFormData({ ...formData, contact: e.target.value })} required />
            </div>
            <button type="submit">提交登記</button>
          </form>
        )
      )}
    </div>
  );
}

export default RegistrationForm
