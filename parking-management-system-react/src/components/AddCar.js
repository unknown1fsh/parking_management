import React, { useState } from 'react';
import { addCar } from '../services/api';
import '../App.css';

function AddCar() {
  const [plateNumber, setPlateNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage(''); // Önceki mesajı temizle
    
    // Frontend validasyonu
    if (!plateNumber || !plateNumber.trim()) {
      setMessage('Plaka numarası boş olamaz.');
      return;
    }

    try {
      const responseText = await addCar(plateNumber);
      setMessage(`✅ ${responseText}`);
      setPlateNumber(''); // Formu temizle
      setTimeout(() => setMessage(''), 5000); // 5 saniye sonra mesajı temizle
    } catch (error) {
      setMessage(`❌ Hata: ${error.message}`);
    }
  };

  const handlePlateNumberChange = (event) => {
    const value = event.target.value.toUpperCase();
    if (value.length <= 9) {
      setPlateNumber(value);
    }
  };

  const getMessageClass = () => {
    if (!message) return '';
    if (message.includes('Hata') || message.includes('dolu') || message.includes('eklenemedi')) {
      return 'error';
    }
    if (message.includes('başarıyla')) {
      return 'success';
    }
    return 'info';
  };

  return (
    <div className="container">
      <h2>➕ Araç Ekle</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>🚗 Plaka Numarası:</label>
          <input
            type="text"
            className="form-control"
            value={plateNumber}
            onChange={handlePlateNumberChange}
            maxLength={9}
            placeholder="Örn: 34ABC123"
            autoFocus
          />
        </div>
        <button type="submit" className="btn btn-primary">🚀 Araç Ekle</button>
      </form>
      {message && (
        <div className={`message ${getMessageClass()}`}>
          {message}
        </div>
      )}
    </div>
  );
}

export default AddCar;