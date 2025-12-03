import React, { useState, useEffect } from 'react';
import { getAllCars } from '../services/api';
import ParkingVisualization from './ParkingVisualization';
import '../App.css';

const MAX_CAPACITY = 100;

const Dashboard = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(false); // İlk yüklemeden sonra loading'i false yap
        const carsData = await getAllCars();
        setCars(carsData);
        setError('');
        setLastUpdate(new Date());
      } catch (err) {
        setError(`Hata: ${err.message}`);
        setCars([]);
      }
    };

    // İlk yükleme
    fetchData();

    // Sadece sayfa aktifken ve her 30 saniyede bir güncelle
    let interval;
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Sayfa gizliyse interval'i durdur
        if (interval) clearInterval(interval);
      } else {
        // Sayfa görünürse interval'i başlat
        interval = setInterval(fetchData, 30000); // 30 saniye
      }
    };

    // Sayfa görünürse interval'i başlat
    if (!document.hidden) {
      interval = setInterval(fetchData, 30000); // 30 saniye
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (interval) clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const occupiedSlots = cars.length;
  const availableSlots = MAX_CAPACITY - occupiedSlots;
  const occupancyRate = ((occupiedSlots / MAX_CAPACITY) * 100).toFixed(1);

  if (loading) {
    return (
      <div className="container">
        <div className="loading">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  const handleRefresh = async () => {
    try {
      setLoading(true);
      const carsData = await getAllCars();
      setCars(carsData);
      setError('');
      setLastUpdate(new Date());
    } catch (err) {
      setError(`Hata: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>🎯 Otopark Dashboard</h2>
        <button 
          onClick={handleRefresh} 
          className="btn-primary"
          style={{ padding: '10px 20px', fontSize: '0.9rem' }}
          disabled={loading}
        >
          🔄 {loading ? 'Yenileniyor...' : 'Yenile'}
        </button>
      </div>
      
      <div style={{ textAlign: 'center', marginBottom: '20px', fontSize: '0.85rem', color: '#666' }}>
        Son güncelleme: {lastUpdate.toLocaleTimeString('tr-TR')}
      </div>
      
      {error && <div className="message error">{error}</div>}

      <div className="stats-grid">
        <div className={`stat-card ${availableSlots > 10 ? 'success' : availableSlots > 0 ? 'warning' : 'danger'}`}>
          <p>Boş Yerler</p>
          <h3>{availableSlots}</h3>
        </div>
        
        <div className="stat-card">
          <p>Dolu Yerler</p>
          <h3>{occupiedSlots}</h3>
        </div>
        
        <div className={`stat-card ${occupancyRate < 80 ? 'success' : occupancyRate < 95 ? 'warning' : 'danger'}`}>
          <p>Doluluk Oranı</p>
          <h3>%{occupancyRate}</h3>
        </div>
        
        <div className="stat-card">
          <p>Toplam Kapasite</p>
          <h3>{MAX_CAPACITY}</h3>
        </div>
      </div>

      <div style={{ marginTop: '40px' }}>
        <h3 style={{ marginBottom: '20px', textAlign: 'center', color: '#333' }}>
          🚗 Park Alanı Görünümü
        </h3>
        <ParkingVisualization cars={cars} maxCapacity={MAX_CAPACITY} />
      </div>

      {availableSlots === 0 && (
        <div className="message error" style={{ marginTop: '30px', textAlign: 'center', fontSize: '1.2rem' }}>
          ⚠️ Otopark Dolu! Yeni araç eklenemez.
        </div>
      )}

      {availableSlots > 0 && availableSlots <= 10 && (
        <div className="message warning" style={{ marginTop: '30px', textAlign: 'center', fontSize: '1.1rem' }}>
          ⚠️ Dikkat! Sadece {availableSlots} boş yer kaldı.
        </div>
      )}
    </div>
  );
};

export default Dashboard;

