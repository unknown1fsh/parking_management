# 🚗 Otopark Yönetim Sistemi - Frontend

[English](#english) | [Türkçe](#türkçe)

---

<a name="türkçe"></a>
## 🇹🇷 Türkçe

### 📋 Proje Hakkında

Otopark Yönetim Sistemi, araç plakalarını yönetmek için geliştirilmiş modern bir web uygulamasıdır. React.js ile geliştirilmiş frontend, Spring Boot backend API'si ile entegre çalışmaktadır.

### ✨ Özellikler

- ✅ **Araç Ekleme**: Yeni plaka numarası ekleme
- 🗑️ **Araç Silme**: Kayıtlı plaka numarası silme
- 📋 **Araç Listeleme**: Tüm kayıtlı araçları görüntüleme
- 📊 **Kapasite Yönetimi**: Otopark kapasitesini ve boş yer sayısını görüntüleme
- 🎨 **Modern UI**: Kullanıcı dostu ve responsive arayüz
- ⚡ **Hızlı ve Güvenilir**: Fetch API ile optimize edilmiş performans

### 🛠️ Teknolojiler

- **React 18.3.1** - UI framework
- **React Router DOM 6.25.1** - Sayfa yönlendirme
- **Fetch API** - HTTP istekleri
- **CSS3** - Stil ve tasarım

### 📦 Kurulum

1. **Projeyi klonlayın:**
```bash
git clone <repository-url>
cd parking-management-system-react
```

2. **Bağımlılıkları yükleyin:**
```bash
npm install
```

3. **Backend API'nin çalıştığından emin olun:**
   - Backend `http://localhost:8087` adresinde çalışmalıdır
   - Backend API dokümantasyonuna göre yapılandırılmış olmalıdır

4. **Uygulamayı başlatın:**
```bash
npm start
```

5. **Tarayıcıda açın:**
   - Uygulama otomatik olarak `http://localhost:3000` adresinde açılacaktır

### 🚀 Kullanım

#### Geliştirme Modu
```bash
npm start
```
Uygulamayı geliştirme modunda çalıştırır. Değişiklikler otomatik olarak yenilenir.

#### Production Build
```bash
npm run build
```
Production için optimize edilmiş build oluşturur. `build` klasörüne çıktı verir.

#### Test
```bash
npm test
```
Test suite'ini çalıştırır.

### 📁 Proje Yapısı

```
parking-management-system-react/
├── public/                 # Statik dosyalar
├── src/
│   ├── components/        # React component'leri
│   │   ├── AddCar.js      # Araç ekleme component'i
│   │   ├── RemoveCar.js   # Araç silme component'i
│   │   ├── AllCars.js     # Araç listeleme component'i
│   │   └── AvailableSlots.js # Kapasite görüntüleme component'i
│   ├── services/          # API servisleri
│   │   └── api.js         # Backend API entegrasyonu
│   ├── App.js             # Ana uygulama component'i
│   ├── App.css            # Ana stil dosyası
│   ├── index.js           # Uygulama giriş noktası
│   └── index.css          # Global stiller
├── package.json           # Proje bağımlılıkları
└── README.md             # Bu dosya
```

### 🔌 API Entegrasyonu

Uygulama aşağıdaki backend endpoint'lerini kullanır:

- **GET** `/api/cars` - Tüm araçları getir
- **POST** `/api/cars` - Yeni araç ekle
- **DELETE** `/api/cars/{plateNumber}` - Araç sil

Backend API Base URL: `http://localhost:8087`

### 🎯 Özellikler Detayı

#### Araç Ekleme
- Plaka numarası otomatik olarak büyük harfe çevrilir
- Frontend ve backend validasyonu
- Duplicate kontrolü
- Kapasite kontrolü (maksimum 100 araç)

#### Araç Silme
- Plaka numarası ile silme
- Başarı/hata mesajları
- Kapasite güncellemesi

#### Kapasite Yönetimi
- Gerçek zamanlı kapasite takibi
- Renk kodlu durum gösterimi:
  - 🟢 Yeşil: 10'dan fazla boş yer
  - 🟡 Sarı: 1-10 arası boş yer
  - 🔴 Kırmızı: Otopark dolu

### 🐛 Sorun Giderme

**Backend bağlantı hatası:**
- Backend'in `http://localhost:8087` adresinde çalıştığından emin olun
- CORS ayarlarının doğru yapılandırıldığını kontrol edin

**Port çakışması:**
- Eğer 3000 portu kullanılıyorsa, React otomatik olarak başka bir port önerecektir
- Terminal çıktısına bakarak doğru portu kullanın

### 📝 Lisans

Bu proje özel bir projedir.

### 👥 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add some amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request açın

---

<a name="english"></a>
## 🇬🇧 English

### 📋 About the Project

Parking Management System is a modern web application developed for managing vehicle license plates. The React.js frontend works integrated with a Spring Boot backend API.

### ✨ Features

- ✅ **Add Vehicle**: Add new license plate numbers
- 🗑️ **Remove Vehicle**: Delete registered license plate numbers
- 📋 **List Vehicles**: View all registered vehicles
- 📊 **Capacity Management**: View parking capacity and available slots
- 🎨 **Modern UI**: User-friendly and responsive interface
- ⚡ **Fast and Reliable**: Optimized performance with Fetch API

### 🛠️ Technologies

- **React 18.3.1** - UI framework
- **React Router DOM 6.25.1** - Page routing
- **Fetch API** - HTTP requests
- **CSS3** - Styling and design

### 📦 Installation

1. **Clone the project:**
```bash
git clone <repository-url>
cd parking-management-system-react
```

2. **Install dependencies:**
```bash
npm install
```

3. **Ensure the Backend API is running:**
   - Backend should be running at `http://localhost:8087`
   - Backend API should be configured according to the documentation

4. **Start the application:**
```bash
npm start
```

5. **Open in browser:**
   - The application will automatically open at `http://localhost:3000`

### 🚀 Usage

#### Development Mode
```bash
npm start
```
Runs the app in development mode. Changes will automatically reload.

#### Production Build
```bash
npm run build
```
Creates an optimized production build. Outputs to the `build` folder.

#### Testing
```bash
npm test
```
Runs the test suite.

### 📁 Project Structure

```
parking-management-system-react/
├── public/                 # Static files
├── src/
│   ├── components/        # React components
│   │   ├── AddCar.js      # Add vehicle component
│   │   ├── RemoveCar.js   # Remove vehicle component
│   │   ├── AllCars.js     # List vehicles component
│   │   └── AvailableSlots.js # Capacity display component
│   ├── services/          # API services
│   │   └── api.js         # Backend API integration
│   ├── App.js             # Main application component
│   ├── App.css            # Main stylesheet
│   ├── index.js           # Application entry point
│   └── index.css          # Global styles
├── package.json           # Project dependencies
└── README.md             # This file
```

### 🔌 API Integration

The application uses the following backend endpoints:

- **GET** `/api/cars` - Get all vehicles
- **POST** `/api/cars` - Add new vehicle
- **DELETE** `/api/cars/{plateNumber}` - Delete vehicle

Backend API Base URL: `http://localhost:8087`

### 🎯 Feature Details

#### Add Vehicle
- License plate automatically converted to uppercase
- Frontend and backend validation
- Duplicate check
- Capacity check (maximum 100 vehicles)

#### Remove Vehicle
- Delete by license plate number
- Success/error messages
- Capacity update

#### Capacity Management
- Real-time capacity tracking
- Color-coded status display:
  - 🟢 Green: More than 10 available slots
  - 🟡 Yellow: 1-10 available slots
  - 🔴 Red: Parking full

### 🐛 Troubleshooting

**Backend connection error:**
- Ensure backend is running at `http://localhost:8087`
- Check that CORS settings are correctly configured

**Port conflict:**
- If port 3000 is in use, React will automatically suggest another port
- Check terminal output for the correct port

### 📝 License

This project is a private project.

### 👥 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📞 Contact & Support

For questions and support, please open an issue in the repository.

---

**Made with ❤️ using React**
