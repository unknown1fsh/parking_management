import React from 'react';
import '../App.css';

const ParkingVisualization = ({ cars, maxCapacity = 100 }) => {
  const slots = [];
  const totalSlots = maxCapacity;
  const occupiedCount = cars.length;
  
  // İlk occupiedCount slotu dolu, geri kalanı boş
  for (let i = 0; i < totalSlots; i++) {
    const isOccupied = i < occupiedCount;
    const car = isOccupied ? cars[i] : null;
    slots.push({ id: i + 1, occupied: isOccupied, car });
  }

  return (
    <div className="parking-lot">
      {slots.map((slot) => (
        <div
          key={slot.id}
          className={`parking-slot ${slot.occupied ? 'occupied' : 'empty'}`}
        >
          {slot.occupied && slot.car ? (
            <>
              <div className="car-icon">
                <div className="car-plate">{slot.car.plateNumber}</div>
              </div>
            </>
          ) : (
            <span style={{ fontSize: '0.8rem', color: 'rgba(0,0,0,0.3)', fontWeight: 600 }}>
              #{slot.id}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default ParkingVisualization;

