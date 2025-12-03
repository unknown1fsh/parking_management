# 🚗 Parking Management System / Otopark Yönetim Sistemi

[English](#english) | [Türkçe](#türkçe)

---

## English

### 📋 Overview

The Parking Management System is a full-stack application designed to efficiently manage vehicle entries and exits in a parking lot. The system tracks available parking slots, prevents duplicate entries, and ensures seamless parking operations.

### ✨ Features

- ✅ **Add Vehicles** - Register new vehicles with automatic plate number normalization
- ✅ **Remove Vehicles** - Delete vehicles from the parking system
- ✅ **List All Vehicles** - View all currently parked vehicles
- ✅ **Capacity Management** - Automatic tracking of available parking slots (Max: 100)
- ✅ **Duplicate Prevention** - Prevents adding the same plate number twice
- ✅ **Auto Uppercase** - Automatically converts plate numbers to uppercase
- ✅ **Input Validation** - Validates plate numbers and prevents empty entries
- ✅ **Real-time Status** - Shows available slots after each operation

### 🛠️ Technologies

**Backend:**
- Java 17
- Spring Boot 2.7.3
- Spring Data JPA
- MySQL 8.0
- Lombok
- Maven

**Frontend:**
- React.js (separate repository)

### 📦 Prerequisites

Before running the application, make sure you have the following installed:

- **Java 17** or higher
- **Maven 3.6+** (or use included Maven Wrapper)
- **MySQL 8.0** or higher
- **Git**

### 🚀 Installation & Setup

#### Step 1: Clone the Repository

```bash
git clone https://github.com/unknown1fsh/parking-management-system.git
cd parking-management-system
```

#### Step 2: Database Setup

1. **Start MySQL Server**

2. **Create Database**

   Connect to MySQL and create the database:
   ```sql
   CREATE DATABASE otopark CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   ```

   Or use the MySQL command line:
   ```bash
   mysql -u root -p -e "CREATE DATABASE otopark CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
   ```

3. **Configure Database Connection**

   Update `src/main/resources/application.properties` with your MySQL credentials:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/otopark
   spring.datasource.username=root
   spring.datasource.password=your_password
   ```

#### Step 3: Run the Application

**Using Maven Wrapper (Recommended):**
```bash
# Windows
./mvnw.cmd spring-boot:run

# Linux/Mac
./mvnw spring-boot:run
```

**Using Maven (if installed):**
```bash
mvn spring-boot:run
```

The application will start on **http://localhost:8087**

### 📡 API Endpoints

#### Base URL
```
http://localhost:8087/api/cars
```

#### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/cars` | Get all vehicles |
| `POST` | `/api/cars` | Add a new vehicle |
| `DELETE` | `/api/cars/{plateNumber}` | Remove a vehicle |

#### Example Requests

**Get All Vehicles:**
```bash
curl http://localhost:8087/api/cars
```

**Add Vehicle:**
```bash
curl -X POST http://localhost:8087/api/cars \
  -H "Content-Type: application/json" \
  -d '{"plateNumber": "34ABC123"}'
```

**Remove Vehicle:**
```bash
curl -X DELETE http://localhost:8087/api/cars/34ABC123
```

### 📝 API Response Examples

**Success Response (Add/Delete):**
```json
"Plaka başarıyla eklendi. Kapasite durumu: 99"
```

**Success Response (Get All):**
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

**Error Response:**
```json
{
  "message": "Bu plaka daha önce eklendi."
}
```

### ⚙️ Configuration

#### Application Properties

Key configuration options in `application.properties`:

- `server.port=8087` - Server port
- `spring.jpa.hibernate.ddl-auto=update` - Auto-update database schema
- `spring.jpa.show-sql=true` - Show SQL queries in console

#### CORS Configuration

The backend is configured to accept requests from:
- Origin: `http://localhost:3000`
- Methods: GET, POST, PUT, DELETE, OPTIONS
- Headers: All headers allowed
- Credentials: Enabled

### 🧪 Testing

Run the test suite:
```bash
./mvnw test
```

### 📁 Project Structure

```
parking-management-system/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/cinargarage/parking_management_system/
│   │   │       ├── config/          # Configuration classes
│   │   │       ├── controller/      # REST controllers
│   │   │       ├── entity/          # JPA entities
│   │   │       ├── exception/       # Exception handlers
│   │   │       ├── repository/      # Data repositories
│   │   │       └── service/         # Business logic
│   │   └── resources/
│   │       └── application.properties
│   └── test/                         # Test files
├── pom.xml                           # Maven configuration
└── README.md
```

### 🔒 Business Rules

- **Maximum Capacity:** 100 vehicles
- **Plate Number:** Automatically converted to uppercase and trimmed
- **Duplicate Check:** Same plate number cannot be added twice
- **Validation:** Plate number cannot be null or empty

### 🐛 Troubleshooting

**Port Already in Use:**
- Change `server.port` in `application.properties`

**Database Connection Error:**
- Verify MySQL is running
- Check database credentials in `application.properties`
- Ensure database `otopark` exists

**Build Errors:**
- Ensure Java 17 is installed: `java -version`
- Clean and rebuild: `./mvnw clean install`

### 📄 License

This project is licensed under the MIT License.

### 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## Türkçe

### 📋 Genel Bakış

Otopark Yönetim Sistemi, bir otoparkta araç giriş ve çıkışlarını verimli bir şekilde yönetmek için tasarlanmış tam yığın bir uygulamadır. Sistem, mevcut park yerlerini takip eder, tekrar eden girişleri önler ve sorunsuz otopark işlemleri sağlar.

### ✨ Özellikler

- ✅ **Araç Ekleme** - Otomatik plaka numarası normalleştirmesi ile yeni araçlar kaydetme
- ✅ **Araç Silme** - Otopark sisteminden araç silme
- ✅ **Tüm Araçları Listeleme** - Şu anda park edilmiş tüm araçları görüntüleme
- ✅ **Kapasite Yönetimi** - Mevcut park yerlerinin otomatik takibi (Maks: 100)
- ✅ **Tekrar Önleme** - Aynı plaka numarasının iki kez eklenmesini önleme
- ✅ **Otomatik Büyük Harf** - Plaka numaralarını otomatik olarak büyük harfe çevirme
- ✅ **Girdi Doğrulama** - Plaka numaralarını doğrulama ve boş girişleri önleme
- ✅ **Anlık Durum** - Her işlemden sonra mevcut yerleri gösterme

### 🛠️ Teknolojiler

**Backend:**
- Java 17
- Spring Boot 2.7.3
- Spring Data JPA
- MySQL 8.0
- Lombok
- Maven

**Frontend:**
- React.js (ayrı repository)

### 📦 Gereksinimler

Uygulamayı çalıştırmadan önce aşağıdakilerin yüklü olduğundan emin olun:

- **Java 17** veya üzeri
- **Maven 3.6+** (veya dahil edilen Maven Wrapper kullanın)
- **MySQL 8.0** veya üzeri
- **Git**

### 🚀 Kurulum ve Yapılandırma

#### Adım 1: Repository'yi Klonlayın

```bash
git clone https://github.com/unknown1fsh/parking-management-system.git
cd parking-management-system
```

#### Adım 2: Veritabanı Kurulumu

1. **MySQL Sunucusunu Başlatın**

2. **Veritabanı Oluşturun**

   MySQL'e bağlanın ve veritabanını oluşturun:
   ```sql
   CREATE DATABASE otopark CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   ```

   Veya MySQL komut satırını kullanın:
   ```bash
   mysql -u root -p -e "CREATE DATABASE otopark CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
   ```

3. **Veritabanı Bağlantısını Yapılandırın**

   `src/main/resources/application.properties` dosyasını MySQL bilgilerinizle güncelleyin:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/otopark
   spring.datasource.username=root
   spring.datasource.password=şifreniz
   ```

#### Adım 3: Uygulamayı Çalıştırın

**Maven Wrapper Kullanarak (Önerilen):**
```bash
# Windows
./mvnw.cmd spring-boot:run

# Linux/Mac
./mvnw spring-boot:run
```

**Maven Kullanarak (yüklüyse):**
```bash
mvn spring-boot:run
```

Uygulama **http://localhost:8087** adresinde başlayacaktır.

### 📡 API Endpoint'leri

#### Base URL
```
http://localhost:8087/api/cars
```

#### Endpoint'ler

| Method | Endpoint | Açıklama |
|--------|----------|----------|
| `GET` | `/api/cars` | Tüm araçları getir |
| `POST` | `/api/cars` | Yeni araç ekle |
| `DELETE` | `/api/cars/{plateNumber}` | Araç sil |

#### Örnek İstekler

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

### 📝 API Yanıt Örnekleri

**Başarılı Yanıt (Ekle/Sil):**
```json
"Plaka başarıyla eklendi. Kapasite durumu: 99"
```

**Başarılı Yanıt (Tümünü Getir):**
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

**Hata Yanıtı:**
```json
{
  "message": "Bu plaka daha önce eklendi."
}
```

### ⚙️ Yapılandırma

#### Uygulama Özellikleri

`application.properties` dosyasındaki önemli yapılandırma seçenekleri:

- `server.port=8087` - Sunucu portu
- `spring.jpa.hibernate.ddl-auto=update` - Veritabanı şemasını otomatik güncelle
- `spring.jpa.show-sql=true` - Konsolda SQL sorgularını göster

#### CORS Yapılandırması

Backend aşağıdaki kaynaklardan gelen istekleri kabul edecek şekilde yapılandırılmıştır:
- Origin: `http://localhost:3000`
- Methodlar: GET, POST, PUT, DELETE, OPTIONS
- Header'lar: Tüm header'lar izinli
- Credentials: Etkin

### 🧪 Test Etme

Test paketini çalıştırın:
```bash
./mvnw test
```

### 📁 Proje Yapısı

```
parking-management-system/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/cinargarage/parking_management_system/
│   │   │       ├── config/          # Yapılandırma sınıfları
│   │   │       ├── controller/      # REST controller'ları
│   │   │       ├── entity/         # JPA entity'leri
│   │   │       ├── exception/      # Exception handler'ları
│   │   │       ├── repository/      # Veri repository'leri
│   │   │       └── service/        # İş mantığı
│   │   └── resources/
│   │       └── application.properties
│   └── test/                        # Test dosyaları
├── pom.xml                          # Maven yapılandırması
└── README.md
```

### 🔒 İş Kuralları

- **Maksimum Kapasite:** 100 araç
- **Plaka Numarası:** Otomatik olarak büyük harfe çevrilir ve trim edilir
- **Tekrar Kontrolü:** Aynı plaka numarası iki kez eklenemez
- **Doğrulama:** Plaka numarası null veya boş olamaz

### 🐛 Sorun Giderme

**Port Zaten Kullanımda:**
- `application.properties` dosyasında `server.port` değerini değiştirin

**Veritabanı Bağlantı Hatası:**
- MySQL'in çalıştığını doğrulayın
- `application.properties` dosyasındaki veritabanı bilgilerini kontrol edin
- `otopark` veritabanının var olduğundan emin olun

**Derleme Hataları:**
- Java 17'nin yüklü olduğundan emin olun: `java -version`
- Temizleyip yeniden derleyin: `./mvnw clean install`

### 📄 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır.

### 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen bir Pull Request göndermekten çekinmeyin.

---

## 📞 İletişim

Sorularınız veya önerileriniz için issue açabilirsiniz.

**Geliştirici:** Cinar Garage  
**Repository:** [parking-management-system](https://github.com/unknown1fsh/parking-management-system)
