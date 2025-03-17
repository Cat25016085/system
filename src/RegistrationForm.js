import React, { useState, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { supabase } from './supabase';
import { v4 as uuidv4 } from 'uuid'; // 產生唯一設備 ID

function RegistrationForm() {
  const [formData, setFormData] = useState({ name: '', contact: '' });
  const [submitted, setSubmitted] = useState(false);
  const [qrValue, setQrValue] = useState('');
  const [entryNumber, setEntryNumber] = useState(null);
  const [participantId, setParticipantId] = useState(null);
  const [deviceId, setDeviceId] = useState(null);

  useEffect(() => {
    let storedDeviceId = localStorage.getItem('deviceId');
    if (!storedDeviceId) {
      storedDeviceId = uuidv4(); // 生成新的設備 ID
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
      .single();

    if (!error && data) {
      setParticipantId(data.id);
      fetchEntryNumber(data.id);
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
    // 先再次檢查姓名 / 聯絡方式 是否已存在
    const { data: existingData, error: existingError } = await supabase
      .from('participants')
      .select('*')
      .or(`name.eq.${formData.name},contact.eq.${formData.contact}`)
      .single();

    if (!existingError && existingData) {
      setParticipantId(existingData.id);
      fetchEntryNumber(existingData.id);
      setSubmitted(true);
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
      {submitted ? (
        <div>
          <h2>此設備已登記！</h2>
          <p>您的抽獎序號：<strong>{entryNumber}</strong></p>
          <QRCodeCanvas value={qrValue} />
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default RegistrationForm;
