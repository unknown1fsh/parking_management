const API_BASE_URL = 'http://localhost:8087/api/cars';

/**
 * Tüm araçları getirir
 * @returns {Promise<Array<{id: number, plateNumber: string}>>}
 */
export async function getAllCars() {
  const response = await fetch(API_BASE_URL);
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Araçlar getirilemedi');
  }
  
  return await response.json();
}

/**
 * Yeni araç ekler
 * @param {string} plateNumber - Plaka numarası
 * @returns {Promise<string>} - Başarı mesajı
 */
export async function addCar(plateNumber) {
  const response = await fetch(API_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ plateNumber }),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Araç eklenemedi');
  }
  
  return await response.text();
}

/**
 * Araç siler
 * @param {string} plateNumber - Silinecek plaka numarası
 * @returns {Promise<string>} - Başarı mesajı
 */
export async function deleteCar(plateNumber) {
  const response = await fetch(`${API_BASE_URL}/${plateNumber}`, {
    method: 'DELETE',
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Araç silinemedi');
  }
  
  return await response.text();
}

