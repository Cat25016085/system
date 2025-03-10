import React, { createContext, useState } from 'react';

export const ParticipantsContext = createContext();

export const ParticipantsProvider = ({ children }) => {
  const [participants, setParticipants] = useState([]);

  // 新增參與者
  const addParticipant = (participant) => {
    setParticipants((prev) => [...prev, participant]);
  };

  // 標記參與者為「已投入抽獎箱」
  const markAsEntered = (id) => {
    setParticipants((prev) =>
      prev.map((p) => (p.id === id ? { ...p, entered: true } : p))
    );
  };

  return (
    <ParticipantsContext.Provider value={{ participants, addParticipant, markAsEntered }}>
      {children}
    </ParticipantsContext.Provider>
  );
};
