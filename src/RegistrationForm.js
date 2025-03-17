// import React, { useState } from 'react';
// import { QRCodeCanvas } from 'qrcode.react';


// function RegistrationForm() {
//   // 表單資料狀態
//   const [formData, setFormData] = useState({
//     name: '',
//     contact: ''
//     // 可依需求加入其他欄位
//   });
//   // 提交狀態
//   const [submitted, setSubmitted] = useState(false);
//   // 用來生成 QR Code 的字串內容
//   const [qrValue, setQrValue] = useState('');

//   // 處理欄位改變
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // 表單提交事件
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // 建立一個唯一識別碼，這裡使用當前的時間戳
//     const participantId = Date.now().toString();
//     const dataToSave = {
//       ...formData,
//       id: participantId
//     };

//     try {
//       // 呼叫後端 API 儲存資料
//       // 假設你的 API 端點為 /api/participants
//       const response = await fetch('/api/participants', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(dataToSave)
//       });
//       if (!response.ok) {
//         throw new Error('資料儲存失敗');
//       }
//       // 將資料轉換為字串，作為 QR Code 的內容
//       setQrValue(JSON.stringify(dataToSave));
//       setSubmitted(true);
//     } catch (error) {
//       console.error('Error saving data:', error);
//       // 可在這邊加入錯誤提示
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>抽獎登記</h1>
//       { !submitted ? (
//         <form onSubmit={handleSubmit}>
//           <div style={{ marginBottom: '10px' }}>
//             <label>姓名：</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div style={{ marginBottom: '10px' }}>
//             <label>聯絡方式：</label>
//             <input
//               type="text"
//               name="contact"
//               value={formData.contact}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           {/* 可根據需求加入更多欄位 */}
//           <button type="submit">提交並生成 QR Code</button>
//         </form>
//       ) : (
//         <div>
//           <h2>您的專屬抽獎 QR Code</h2>
//           <QRCodeCanvas value={qrValue} />
//           <p>請將此 QR Code 提供給工作人員進行後續驗證。</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default RegistrationForm;









// import React, { useState } from 'react';
// import { QRCodeCanvas } from 'qrcode.react';

// function RegistrationForm() {
//   const [formData, setFormData] = useState({ name: '', contact: '' });
//   const [submitted, setSubmitted] = useState(false);
//   const [qrValue, setQrValue] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // 建立一個唯一識別碼，這裡使用時間戳記
//     const participantId = Date.now().toString();
//     const dataToSave = { ...formData, id: participantId };

//     try {
//       // 如果你尚未建立後端 API，這邊可以暫時直接模擬成功：
//       // const response = await fetch('/api/participants', {
//       //   method: 'POST',
//       //   headers: { 'Content-Type': 'application/json' },
//       //   body: JSON.stringify(dataToSave)
//       // });
//       // if (!response.ok) throw new Error('資料儲存失敗');

//       // 模擬成功後直接更新狀態
//       setQrValue(JSON.stringify(dataToSave));
//       setSubmitted(true);
//     } catch (error) {
//       console.error('Error saving data:', error);
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>抽獎登記</h1>
//       { !submitted ? (
//         <form onSubmit={handleSubmit}>
//           <div style={{ marginBottom: '10px' }}>
//             <label>姓名：</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div style={{ marginBottom: '10px' }}>
//             <label>聯絡方式：</label>
//             <input
//               type="text"
//               name="contact"
//               value={formData.contact}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit">提交並生成 QR Code</button>
//         </form>
//       ) : (
//         <div>
//           <h2>您的專屬抽獎 QR Code</h2>
//           <QRCodeCanvas value={qrValue} />
//           <p>請將此 QR Code 提供給工作人員進行驗證。</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default RegistrationForm;












// import React, { useState } from 'react';
// import { QRCodeCanvas } from 'qrcode.react';

// function RegistrationForm() {
//   const [formData, setFormData] = useState({ name: '', contact: '' });
//   const [submitted, setSubmitted] = useState(false);
//   // QR Code 內容預設為空
//   const [qrValue, setQrValue] = useState('');

//   // 處理表單欄位變更
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // 表單提交時執行
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // 產生唯一識別碼（這裡以時間戳為例）
//     const participantId = Date.now().toString();
//     // 模擬資料庫中參與者資料，並加上初始狀態 entered: false 表示尚未加入抽獎箱
//     const dataToSave = { ...formData, id: participantId, entered: false };

//     try {
//       // 模擬 API 呼叫，實際上這裡應該用 fetch 將資料 POST 到後端儲存
//       console.log("保存資料：", dataToSave);
//       // 一旦儲存成功，生成 QR Code 內容（這裡只放 participantId）
//       setQrValue(JSON.stringify({ id: participantId }));
//       setSubmitted(true);
//     } catch (error) {
//       console.error("資料儲存錯誤：", error);
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>抽獎登記</h1>
//       { !submitted ? (
//         <form onSubmit={handleSubmit}>
//           <div style={{ marginBottom: '10px' }}>
//             <label>姓名：</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div style={{ marginBottom: '10px' }}>
//             <label>聯絡方式：</label>
//             <input
//               type="text"
//               name="contact"
//               value={formData.contact}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit">提交登記</button>
//         </form>
//       ) : (
//         <div>
//           <h2>登記成功！</h2>
//           <p>請將以下 QR Code 提供給工作人員掃描，確認您已加入抽獎箱。</p>
//           <QRCodeCanvas value={qrValue} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default RegistrationForm;










// import React, { useState, useContext } from 'react';
// import { QRCodeCanvas } from 'qrcode.react';
// import { ParticipantsContext } from './ParticipantsContext';

// function RegistrationForm() {
//   const { addParticipant } = useContext(ParticipantsContext);
//   const [formData, setFormData] = useState({ name: '', contact: '' });
//   const [submitted, setSubmitted] = useState(false);
//   const [qrValue, setQrValue] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const participantId = Date.now().toString();
//     const dataToSave = { ...formData, id: participantId, entered: false };

//     // 模擬資料儲存成功
//     console.log("保存資料：", dataToSave);
//     // 將新參與者加入全局狀態
//     addParticipant(dataToSave);
//     setQrValue(JSON.stringify({ id: participantId }));
//     setSubmitted(true);
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>抽獎登記</h1>
//       { !submitted ? (
//         <form onSubmit={handleSubmit}>
//           <div style={{ marginBottom: '10px' }}>
//             <label>姓名：</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div style={{ marginBottom: '10px' }}>
//             <label>聯絡方式：</label>
//             <input
//               type="text"
//               name="contact"
//               value={formData.contact}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit">提交登記</button>
//         </form>
//       ) : (
//         <div>
//           <h2>登記成功！</h2>
//           <p>請將以下 QR Code 提供給工作人員掃描，確認您已加入抽獎箱。</p>
//           <QRCodeCanvas value={qrValue} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default RegistrationForm;















// import React, { useState, useContext, useEffect } from 'react';
// import { QRCodeCanvas } from 'qrcode.react';
// import { ParticipantsContext } from './ParticipantsContext';

// function RegistrationForm() {
//   const { addParticipant } = useContext(ParticipantsContext);
//   const [formData, setFormData] = useState({ name: '', contact: '' });
//   const [submitted, setSubmitted] = useState(false);
//   const [qrValue, setQrValue] = useState('');

//   useEffect(() => {
//     // 檢查 localStorage，防止重複填寫
//     const savedId = localStorage.getItem('deviceId');
//     if (savedId) {
//       setQrValue(JSON.stringify({ id: savedId }));
//       setSubmitted(true);
//     }
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (submitted) {
//       alert('您已填寫過表單，無法重複參加！');
//       return;
//     }

//     const participantId = Date.now().toString(); // 生成唯一 ID
//     const dataToSave = { ...formData, id: participantId, entered: false };

//     console.log("保存資料：", dataToSave); // 模擬存儲
//     addParticipant(dataToSave); // 加入全域狀態

//     setQrValue(JSON.stringify({ id: participantId })); // 產生 QR Code
//     setSubmitted(true);

//     localStorage.setItem('deviceId', participantId); // 記錄該設備已填寫
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>抽獎登記</h1>
//       {!submitted ? (
//         <form onSubmit={handleSubmit}>
//           <div style={{ marginBottom: '10px' }}>
//             <label>姓名：</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div style={{ marginBottom: '10px' }}>
//             <label>聯絡方式：</label>
//             <input
//               type="text"
//               name="contact"
//               value={formData.contact}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit">提交登記</button>
//         </form>
//       ) : (
//         <div>
//           <h2>登記成功！</h2>
//           <p>請將以下 QR Code 提供給工作人員掃描，確認您已加入抽獎箱。</p>
//           <QRCodeCanvas value={qrValue} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default RegistrationForm;






// import React, { useState } from 'react';
// import { supabase } from './supabase';
// import { QRCodeCanvas } from 'qrcode.react';

// function RegistrationForm() {
//   const [formData, setFormData] = useState({ name: '', contact: '' });
//   const [submitted, setSubmitted] = useState(false);
//   const [qrValue, setQrValue] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // 將資料存入 Supabase
//     const { data, error } = await supabase
//       .from('participants')
//       .insert([{ ...formData, entered: false }])
//       .select();

//     if (error) {
//       console.error('儲存失敗:', error.message);
//       return;
//     }

//     // 設定 QR Code
//     setQrValue(JSON.stringify({ id: data[0].id }));
//     setSubmitted(true);
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>抽獎登記</h1>
//       { !submitted ? (
//         <form onSubmit={handleSubmit}>
//           <div style={{ marginBottom: '10px' }}>
//             <label>姓名：</label>
//             <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//           </div>
//           <div style={{ marginBottom: '10px' }}>
//             <label>聯絡方式：</label>
//             <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />
//           </div>
//           <button type="submit">提交登記</button>
//         </form>
//       ) : (
//         <div>
//           <h2>登記成功！</h2>
//           <p>請將以下 QR Code 提供給工作人員掃描，確認您已加入抽獎箱。</p>
//           <QRCodeCanvas value={qrValue} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default RegistrationForm;



import React, { useState, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { supabase } from './supabase';

function RegistrationForm() {
  const [formData, setFormData] = useState({ name: '', contact: '' });
  const [submitted, setSubmitted] = useState(false);
  const [qrValue, setQrValue] = useState('');
  const [entryNumber, setEntryNumber] = useState(null);
  const [participantId, setParticipantId] = useState(null);
  const [existingUser, setExistingUser] = useState(null);
  const [checking, setChecking] = useState(false);
  const [deviceRestricted, setDeviceRestricted] = useState(false);

  useEffect(() => {
    const storedId = localStorage.getItem('registeredId');
    if (storedId) {
      setDeviceRestricted(true);
      loadExistingData(parseInt(storedId));
    }
  }, []);

  const loadExistingData = async (id) => {
    setParticipantId(id); // 確保 participantId 被正確設置
    const { data, error } = await supabase.from('participants').select('*').eq('id', id).single();
    if (!error && data) {
      fetchEntryNumber(data.id);
      setSubmitted(true);
    }
  };
  

  const checkDuplicate = async () => {
    setChecking(true);
    const { data, error } = await supabase
      .from('participants')
      .select('*')
      .eq('contact', formData.contact)
      .maybeSingle();

    setChecking(false);

    if (error) {
      console.error('讀取失敗:', error.message);
      return;
    }

    if (data) {
      setExistingUser(data);
    } else {
      setExistingUser(null);
      handleSubmit();
    }
  };

  const confirmExisting = () => {
    fetchEntryNumber(existingUser.id);
    setSubmitted(true);
    setExistingUser(null);
    localStorage.setItem('registeredId', existingUser.id);
  };

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

  const handleSubmit = async () => {
    const { data, error } = await supabase
      .from('participants')
      .insert([{ name: formData.name, contact: formData.contact, entered: false }])
      .select('id')
      .single();

    if (error) {
      console.error('資料存入失敗:', error.message);
      return;
    }

    setParticipantId(data.id);
    fetchEntryNumber(data.id);
    setSubmitted(true);
    localStorage.setItem('registeredId', data.id);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>抽獎登記</h1>
      {deviceRestricted && submitted && (
        <div>
          <p style={{ color: 'red' }}>此設備已填寫過，無法再次登記。</p>
          <h2>您的抽獎序號：<strong>{entryNumber}</strong></h2>
          <p>請將以下 QR Code 提供給工作人員掃描，確認您已加入抽獎箱。</p>
          <QRCodeCanvas value={qrValue} />
        </div>
      )}
      {!submitted && !deviceRestricted && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            checkDuplicate();
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
          <button type="submit" disabled={checking}>
            {checking ? '檢查中...' : '提交登記'}
          </button>
        </form>
      )}
      {existingUser && (
        <div>
          <p>發現相同的聯絡方式！</p>
          <p>姓名: <strong>{existingUser.name}</strong></p>
          <p>填寫時間: <strong>{new Date(existingUser.created_at).toLocaleString()}</strong></p>
          <button onClick={confirmExisting}>是我的</button>
          <button onClick={() => setExistingUser(null)}>不是，重新填寫</button>
        </div>
      )}
      {submitted && !deviceRestricted && (
        <div>
          <h2>登記成功！</h2>
          <p>您的抽獎序號：<strong>{entryNumber}</strong></p>
          <p>請將以下 QR Code 提供給工作人員掃描，確認您已加入抽獎箱。</p>
          <QRCodeCanvas value={qrValue} />
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;
