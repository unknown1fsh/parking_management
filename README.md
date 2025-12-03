# 🚗 Otopark Yönetim Sistemi / Parking Management System

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-2.7.3-brightgreen.svg)](https://spring.io/projects/spring-boot)
[![Java](https://img.shields.io/badge/Java-17-orange.svg)](https://www.oracle.com/java/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-blue.svg)](https://www.mysql.com/)

Modern, kullanıcı dostu ve görsel olarak çarpıcı bir otopark yönetim sistemi. Fullstack React + Spring Boot uygulaması.

---

## 📋 İçindekiler

- [Özellikler](#-özellikler)
- [Teknolojiler](#-teknolojiler)
- [Kurulum](#-kurulum)
- [Hızlı Başlangıç](#-hızlı-başlangıç)
- [Kullanım](#-kullanım)
- [Proje Yapısı](#-proje-yapısı)
- [API Dokümantasyonu](#-api-dokümantasyonu)
- [Ekran Görüntüleri](#-ekran-görüntüleri)
- [Sorun Giderme](#-sorun-giderme)
- [Katkıda Bulunma](#-katkıda-bulunma)

---

## ✨ Özellikler

### 🎯 Ana Özellikler

- ✅ **Modern Dashboard** - Gerçek zamanlı park alanı görselleştirmesi
- ✅ **Araç Yönetimi** - Kolay araç ekleme ve silme
- ✅ **Kapasite Takibi** - 100 araç kapasiteli otomatik takip
- ✅ **Görsel Park Alanı** - 100 slotlu interaktif park görünümü
- ✅ **Gerçek Zamanlı Güncelleme** - Otomatik veri senkronizasyonu
- ✅ **Responsive Tasarım** - Mobil ve masaüstü uyumlu
- ✅ **Modern UI/UX** - Gradient tasarım ve animasyonlar

### 🚀 Teknik Özellikler

- **Backend:**
  - RESTful API
  - JPA/Hibernate ORM
  - MySQL veritabanı
  - CORS yapılandırması
  - Global exception handling

- **Frontend:**
  - React 18 (createRoot API)
  - React Router DOM
  - Modern CSS3 (Gradient, Animations)
  - Responsive design
  - Optimized API calls

---

## 🛠️ Teknolojiler

### Backend Stack
- **Java 17** - Programlama dili
- **Spring Boot 2.7.3** - Framework
- **Spring Data JPA** - Veritabanı erişimi
- **MySQL 8.0** - Veritabanı
- **Lombok** - Kod azaltma
- **Maven** - Bağımlılık yönetimi

### Frontend Stack
- **React 18.3.1** - UI Framework
- **React Router DOM 6.25.1** - Routing
- **CSS3** - Modern styling
- **Fetch API** - HTTP istekleri

---

## 📦 Kurulum

### Gereksinimler

- **Java 17** veya üzeri
- **Node.js 16+** ve npm
- **MySQL 8.0** veya üzeri
- **Maven 3.6+** (veya Maven Wrapper)
- **Git**

### Adım 1: Repository'yi Klonlayın

```bash
git clone https://github.com/unknown1fsh/parking_management.git
cd parking_management
```

### Adım 2: Veritabanı Kurulumu

1. **MySQL'i başlatın**

2. **Veritabanını oluşturun:**
```sql
CREATE DATABASE otopark CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

3. **Veritabanı bağlantı bilgilerini güncelleyin:**
   - Dosya: `parking-management-system/src/main/resources/application.properties`
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/otopark
   spring.datasource.username=root
   spring.datasource.password=12345
   ```

### Adım 3: Backend Kurulumu

```bash
cd parking-management-system
mvn clean install
```

### Adım 4: Frontend Kurulumu

```bash
cd parking-management-system-react
npm install
```

---

## 🚀 Hızlı Başlangıç

### Windows PowerShell ile Başlatma

Proje kök dizininde:

```powershell
# Fullstack başlatma (Backend + Frontend)
.\start-fullstack.bat

# Sadece Backend
.\start-backend.bat

# Sadece Frontend
.\start-frontend.bat

# Portları kapatma
.\kill-ports.bat
```

**Not:** PowerShell'de `.bat` dosyalarını çalıştırmak için başına `.\` ekleyin.

### Manuel Başlatma

#### Backend Başlatma

```bash
cd parking-management-system
mvn spring-boot:run
```

Backend: **http://localhost:8087**

#### Frontend Başlatma

```bash
cd parking-management-system-react
npm start
```

Frontend: **http://localhost:3000**

---

## 📖 Kullanım

### Dashboard

Ana sayfa olan Dashboard'da:
- 📊 Gerçek zamanlı istatistikler
- 🚗 Park alanı görselleştirmesi (100 slot)
- 🔄 Otomatik güncelleme (30 saniyede bir)
- 🔄 Manuel yenileme butonu

### Araç Ekleme

1. "➕ Araç Ekle" sayfasına gidin
2. Plaka numarasını girin (örn: `34ABC123`)
3. "🚀 Araç Ekle" butonuna tıklayın
4. Başarı mesajını görün

### Araç Silme

1. "➖ Araç Sil" sayfasına gidin
2. Silinecek plaka numarasını girin
3. "🗑️ Araç Sil" butonuna tıklayın

### Tüm Araçlar

"📋 Tüm Araçlar" sayfasında:
- Tüm park halindeki araçları görüntüleyin
- Grid görünümünde listeleme

### Kapasite Durumu

"📊 Kapasite" sayfasında:
- Boş ve dolu yer sayısı
- Doluluk oranı
- Progress bar görselleştirmesi
- Renk kodlu durum gösterimi

---

## 📁 Proje Yapısı

```
parking_management/
├── parking-management-system/          # Backend (Spring Boot)
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/cinargarage/parking_management_system/
│   │   │   │       ├── config/        # CORS yapılandırması
│   │   │   │       ├── controller/    # REST Controller'lar
│   │   │   │       ├── entity/        # JPA Entity'ler
│   │   │   │       ├── exception/      # Exception Handler
│   │   │   │       ├── repository/     # Data Repository
│   │   │   │       └── service/        # Business Logic
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   └── pom.xml
│
├── parking-management-system-react/   # Frontend (React)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.js            # Ana dashboard
│   │   │   ├── ParkingVisualization.js # Park görselleştirme
│   │   │   ├── AddCar.js               # Araç ekleme
│   │   │   ├── RemoveCar.js            # Araç silme
│   │   │   ├── AllCars.js              # Araç listesi
│   │   │   └── AvailableSlots.js       # Kapasite durumu
│   │   ├── services/
│   │   │   └── api.js                  # API servisleri
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
│
├── start-backend.bat                  # Backend başlatma scripti
├── start-frontend.bat                 # Frontend başlatma scripti
├── start-fullstack.bat                # Fullstack başlatma scripti
├── kill-ports.bat                     # Port kapatma scripti
├── KULLANIM_KILAVUZU.txt              # Detaylı kullanım kılavuzu
└── README.md                          # Bu dosya
```

---

## 📡 API Dokümantasyonu

### Base URL
```
http://localhost:8087/api/cars
```

### Endpoints

| Method | Endpoint | Açıklama | Request Body |
|--------|----------|----------|--------------|
| `GET` | `/api/cars` | Tüm araçları getir | - |
| `POST` | `/api/cars` | Yeni araç ekle | `{"plateNumber": "34ABC123"}` |
| `DELETE` | `/api/cars/{plateNumber}` | Araç sil | - |

### Örnek İstekler

**Tüm Araçları Getir:**
```bash
curl http://localhost:8087/api/cars
```

**Araç Ekle:**
```bash
curl -X POST http://localhost:8087/api/cars \
  -H "Content-Type: application/json" \
  -d '{"plateNumber": "34ABC123"}'
```

**Araç Sil:**
```bash
curl -X DELETE http://localhost:8087/api/cars/34ABC123
```

### Yanıt Örnekleri

**Başarılı Ekleme:**
```json
"Plaka başarıyla eklendi. Kapasite durumu: 99"
```

**Araç Listesi:**
```json
[
  {
    "id": 1,
    "plateNumber": "34ABC123"
  },
  {
    "id": 2,
    "plateNumber": "06XYZ789"
  }
]
```

---

## 🎨 Ekran Görüntüleri

### Dashboard
- Gerçek zamanlı park alanı görselleştirmesi
- 100 slotlu interaktif grid
- İstatistik kartları
- Modern gradient tasarım

### Özellikler
- 🎨 Modern UI/UX tasarımı
- 🚗 Araç şekilleri ve animasyonlar
- 📊 Gerçek zamanlı istatistikler
- 🔄 Otomatik güncelleme
- 📱 Responsive tasarım

---

## 🔧 Yapılandırma

### Backend Yapılandırması

`parking-management-system/src/main/resources/application.properties`:

```properties
# Server
server.port=8087

# Database
spring.datasource.url=jdbc:mysql://localhost:3306/otopark
spring.datasource.username=root
spring.datasource.password=12345

# JPA
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
```

### Frontend Yapılandırması

`parking-management-system-react/src/services/api.js`:

```javascript
const API_BASE_URL = 'http://localhost:8087/api/cars';
```

### CORS Yapılandırması

Backend, `http://localhost:3000` origin'inden gelen isteklere izin verir.

---

## 🐛 Sorun Giderme

### Port Çakışması

**Sorun:** Port zaten kullanımda
```powershell
.\kill-ports.bat
```

### Veritabanı Bağlantı Hatası

**Sorun:** MySQL'e bağlanılamıyor
- MySQL servisinin çalıştığını kontrol edin
- `application.properties` dosyasındaki bilgileri doğrulayın
- Veritabanının oluşturulduğundan emin olun

### Backend Başlamıyor

```bash
cd parking-management-system
mvn clean install
mvn spring-boot:run
```

### Frontend Başlamıyor

```bash
cd parking-management-system-react
rm -rf node_modules
npm install
npm start
```

### CORS Hatası

Backend'in `http://localhost:8087` adresinde çalıştığından emin olun.
Frontend'in `http://localhost:3000` adresinde çalıştığından emin olun.

---

## 📝 İş Kuralları

- **Maksimum Kapasite:** 100 araç
- **Plaka Formatı:** Otomatik büyük harfe çevrilir
- **Tekrar Kontrolü:** Aynı plaka iki kez eklenemez
- **Validasyon:** Plaka numarası boş olamaz

---

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add some amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request açın

---

## 📄 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır.

---

## 👨‍💻 Geliştirici

**unknown1fsh**

- GitHub: [@unknown1fsh](https://github.com/unknown1fsh)
- Repository: [parking_management](https://github.com/unknown1fsh/parking_management)

---

## 🙏 Teşekkürler

- React ekibine
- Spring Boot ekibine
- Tüm açık kaynak topluluğuna

---

## 📞 İletişim

Sorularınız veya önerileriniz için:
- Issue açın: [GitHub Issues](https://github.com/unknown1fsh/parking_management/issues)

---

**⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!**

---

Made with ❤️ using React & Spring Boot

