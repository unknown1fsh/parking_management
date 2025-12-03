import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import AddCar from './components/AddCar';
import RemoveCar from './components/RemoveCar';
import AllCars from './components/AllCars';
import AvailableSlots from './components/AvailableSlots';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>🚗 Otopark Yönetim Sistemi</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <Link to="/add-car">➕ Araç Ekle</Link>
              </li>
              <li>
                <Link to="/remove-car">➖ Araç Sil</Link>
              </li>
              <li>
                <Link to="/all-cars">📋 Tüm Araçlar</Link>
              </li>
              <li>
                <Link to="/available-slots">📊 Kapasite</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-car" element={<AddCar />} />
          <Route path="/remove-car" element={<RemoveCar />} />
          <Route path="/all-cars" element={<AllCars />} />
          <Route path="/available-slots" element={<AvailableSlots />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;