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









import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

function RegistrationForm() {
  const [formData, setFormData] = useState({ name: '', contact: '' });
  const [submitted, setSubmitted] = useState(false);
  const [qrValue, setQrValue] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 建立一個唯一識別碼，這裡使用時間戳記
    const participantId = Date.now().toString();
    const dataToSave = { ...formData, id: participantId };

    try {
      // 如果你尚未建立後端 API，這邊可以暫時直接模擬成功：
      // const response = await fetch('/api/participants', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(dataToSave)
      // });
      // if (!response.ok) throw new Error('資料儲存失敗');

      // 模擬成功後直接更新狀態
      setQrValue(JSON.stringify(dataToSave));
      setSubmitted(true);
    } catch (error) {
      console.error('Error saving data:', error);
    }
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
          <button type="submit">提交並生成 QR Code</button>
        </form>
      ) : (
        <div>
          <h2>您的專屬抽獎 QR Code</h2>
          <QRCodeCanvas value={qrValue} />
          <p>請將此 QR Code 提供給工作人員進行驗證。</p>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;
