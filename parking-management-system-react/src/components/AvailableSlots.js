import React, { useState, useEffect } from 'react';
import { getAllCars } from '../services/api';
import '../App.css';

const MAX_CAPACITY = 100;

const AvailableSlots = () => {
  const [availableSlots, setAvailableSlots] = useState(null);
  const [totalCars, setTotalCars] = useState(0);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {
    const fetchCapacity = async () => {
      try {
        setLoading(false); // İlk yüklemeden sonra loading'i false yap
        const cars = await getAllCars();
        const carCount = cars.length;
        const available = MAX_CAPACITY - carCount;
        setTotalCars(carCount);
        setAvailableSlots(available);
        setMessage('');
        setLastUpdate(new Date());
      } catch (error) {
        setMessage(`Hata: ${error.message}`);
        setAvailableSlots(null);
      }
    };

    // İlk yükleme
    fetchCapacity();

    // Sadece sayfa aktifken ve her 30 saniyede bir güncelle
    let interval;
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Sayfa gizliyse interval'i durdur
        if (interval) clearInterval(interval);
      } else {
        // Sayfa görünürse interval'i başlat
        interval = setInterval(fetchCapacity, 30000); // 30 saniye
      }
    };

    // Sayfa görünürse interval'i başlat
    if (!document.hidden) {
      interval = setInterval(fetchCapacity, 30000); // 30 saniye
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (interval) clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const occupancyRate = totalCars > 0 ? ((totalCars / MAX_CAPACITY) * 100).toFixed(1) : 0;

  const handleRefresh = async () => {
    try {
      setLoading(true);
      const cars = await getAllCars();
      const carCount = cars.length;
      const available = MAX_CAPACITY - carCount;
      setTotalCars(carCount);
      setAvailableSlots(available);
      setMessage('');
      setLastUpdate(new Date());
    } catch (error) {
      setMessage(`Hata: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>📊 Kapasite Durumu</h2>
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
      
      {message && <div className="message error">{message}</div>}
      {loading ? (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      ) : availableSlots !== null ? (
        <div>
          <div className="stats-grid">
            <div className={`stat-card ${availableSlots > 10 ? 'success' : availableSlots > 0 ? 'warning' : 'danger'}`}>
              <p>Boş Yerler</p>
              <h3>{availableSlots}</h3>
            </div>
            
            <div className="stat-card">
              <p>Dolu Yerler</p>
              <h3>{totalCars}</h3>
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

          <div className={`message ${availableSlots > 10 ? 'success' : availableSlots > 0 ? 'warning' : 'error'}`} style={{ marginTop: '30px', textAlign: 'center', fontSize: '1.2rem', fontWeight: 600 }}>
            {availableSlots === 0 
              ? '⚠️ Otopark Dolu!' 
              : availableSlots <= 10 
              ? `⚠️ Dikkat: Sadece ${availableSlots} boş yer kaldı!` 
              : `✅ ${availableSlots} boş yer mevcut.`}
          </div>

          {/* Progress Bar */}
          <div style={{ marginTop: '30px' }}>
            <div style={{ 
              width: '100%', 
              height: '30px', 
              backgroundColor: '#e0e0e0', 
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.1)'
            }}>
              <div style={{
                width: `${occupancyRate}%`,
                height: '100%',
                background: availableSlots > 10 
                  ? 'linear-gradient(135deg, #51cf66 0%, #40c057 100%)'
                  : availableSlots > 0 
                  ? 'linear-gradient(135deg, #ffd43b 0%, #fcc419 100%)'
                  : 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)',
                transition: 'width 0.5s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 700,
                fontSize: '0.9rem'
              }}>
                {occupancyRate > 10 && `${occupancyRate}%`}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AvailableSlots;