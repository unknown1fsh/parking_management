import React, { useState, useEffect } from 'react';
import { getAllCars } from '../services/api';
import '../App.css';

const AllCars = () => {
  const [cars, setCars] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const carsData = await getAllCars();
        setCars(carsData);
        setMessage('');
      } catch (error) {
        setMessage(`Hata: ${error.message}`);
        setCars([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="container">
      <h2>📋 Tüm Araçlar</h2>
      {message && <div className="message error">{message}</div>}
      {loading ? (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      ) : cars.length === 0 ? (
        <div className="message info" style={{ textAlign: 'center', fontSize: '1.1rem' }}>
          🚗 Henüz araç eklenmemiş. İlk aracı eklemek için "Araç Ekle" sayfasına gidin.
        </div>
      ) : (
        <>
          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', fontWeight: 600, color: '#667eea' }}>
              Toplam {cars.length} araç park halinde
            </p>
          </div>
          <ul className="list-group">
            {cars.map((car) => (
              <li key={car.id} className="list-group-item">
                🚗 {car.plateNumber}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default AllCars;