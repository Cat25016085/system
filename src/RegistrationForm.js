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










import React, { useState, useContext } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { ParticipantsContext } from './ParticipantsContext';

function RegistrationForm() {
  const { addParticipant } = useContext(ParticipantsContext);
  const [formData, setFormData] = useState({ name: '', contact: '' });
  const [submitted, setSubmitted] = useState(false);
  const [qrValue, setQrValue] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const participantId = Date.now().toString();
    const dataToSave = { ...formData, id: participantId, entered: false };

    // 模擬資料儲存成功
    console.log("保存資料：", dataToSave);
    // 將新參與者加入全局狀態
    addParticipant(dataToSave);
    setQrValue(JSON.stringify({ id: participantId }));
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>抽獎登記</h1>
      { !submitted ? (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label>姓名：</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>聯絡方式：</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">提交登記</button>
        </form>
      ) : (
        <div>
          <h2>登記成功！</h2>
          <p>請將以下 QR Code 提供給工作人員掃描，確認您已加入抽獎箱。</p>
          <QRCodeCanvas value={qrValue} />
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;
