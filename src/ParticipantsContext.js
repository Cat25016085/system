import React, { createContext, useState, useEffect } from 'react';

export const ParticipantsContext = createContext();

export const ParticipantsProvider = ({ children }) => {
  const [participants, setParticipants] = useState([]);

  // 讀取 localStorage
  useEffect(() => {
    const storedParticipants = JSON.parse(localStorage.getItem('participants')) || [];
    setParticipants(storedParticipants);
  }, []);

  // 儲存到 localStorage
  const saveToLocalStorage = (data) => {
    localStorage.setItem('participants', JSON.stringify(data));
  };

  // 新增參與者（檢查設備是否已填寫）
  const addParticipant = (participant) => {
    const deviceId = localStorage.getItem('deviceId');

    if (deviceId) {
      alert('您已填寫過表單，無法重複參加！');
      return;
    }

    const updatedParticipants = [...participants, participant];
    setParticipants(updatedParticipants);
    saveToLocalStorage(updatedParticipants);

    // 設定裝置 ID，防止重複填寫
    localStorage.setItem('deviceId', participant.id);
  };

  // 標記為「已投入抽獎箱」
  const markAsEntered = (id) => {
    const updatedParticipants = participants.map((p) =>
      p.id === id ? { ...p, entered: true } : p
    );
    setParticipants(updatedParticipants);
    saveToLocalStorage(updatedParticipants);
  };

  return (
    <ParticipantsContext.Provider value={{ participants, addParticipant, markAsEntered }}>
      {children}
    </ParticipantsContext.Provider>
  );
};
