# ProjectFitness-1 - Smart Fitness Management System

🚀 **ProjectFitness-1** เป็นระบบจัดการฟิตเนสอัจฉริยะที่รวม **Software** และ **Hardware** เพื่อให้การจัดการสมาชิกและอุปกรณ์ออกกำลังกายเป็นเรื่องง่ายและทันสมัย

---

## 🎯 **Features**
✅ **ระบบสมาชิกอัจฉริยะ** - จัดการสมาชิกแบบออนไลน์ เชื่อมต่อกับฐานข้อมูล MySQL/SQLite  
✅ **สแกนลายนิ้วมือ (Fingerprint)** - ใช้เซ็นเซอร์ AS608 และ ESP8266/ESP32 สำหรับระบุตัวตนสมาชิก  
✅ **ระบบ Authentication** - JWT Token-based authentication พร้อม Protected Routes  
✅ **ระบบ Daily Members** - จัดการสมาชิกรายวันพร้อมระบบรหัสใช้งาน  
✅ **Dashboard บริหารจัดการ** - พัฒนาโดย ReactJS + Material-UI สำหรับการจัดการข้อมูล  
✅ **รองรับ IoT** - สื่อสารระหว่างอุปกรณ์และเซิร์ฟเวอร์ผ่าน WebSocket  
✅ **รองรับการใช้งานบน Cloud** - Deploy ทั้ง Frontend และ Backend บน Vercel  

---

## 🔧 **Tech Stack**
- **Frontend**: ReactJS 18, Material-UI (MUI), React Router, Axios
- **Backend**: Node.js, Express.js, WebSocket, SerialPort
- **Database**: MySQL (MAMP), SQLite3 (สำหรับ Development)
- **Authentication**: JWT, bcrypt
- **Hardware**: ESP8266/ESP32, Fingerprint Sensor AS608
- **Deployment**: Vercel (Frontend & Backend)

---

## 🚀 **Getting Started**

### 📋 **Prerequisites**
- Node.js 16+ 
- MAMP/XAMPP (สำหรับ MySQL)
- Git

### 1️⃣ **Clone Repository**
```bash
git clone https://github.com/nickja054/ProjectFitness-1.git
cd ProjectFitness-1
```

### 2️⃣ **ติดตั้ง Dependencies**

**Backend:**
```bash
cd Backend-main
npm install
```

**Frontend:**
```bash
cd Frontend-main
npm install
```

### 3️⃣ **ตั้งค่า Database**

**สำหรับ MySQL (MAMP):**
```bash
# เริ่ม MAMP Server
# สร้างฐานข้อมูล gym_management
# Import ไฟล์ gym_simple.sql
```

**ตั้งค่าไฟล์ .env ใน Backend-main:**
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_NAME=gym_management
DB_PORT=3306
```

### 4️⃣ **เริ่มต้นระบบ**

**เริ่ม Backend:**
```bash
cd Backend-main
node server.js
# หรือใช้ batch file
../start-backend.bat
```

**เริ่ม Frontend:**
```bash
cd Frontend-main
npm start
```

### 5️⃣ **เข้าใช้งานระบบ**
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Login**: `admin@gym.com` / `test@gym.com` (password ตามข้อมูลในฐานข้อมูล)

---

## 📡 **Hardware Setup**

### 1️⃣ **ติดตั้ง Library สำหรับ ESP8266/ESP32**
- ติดตั้ง `Arduino IDE`
- ติดตั้ง Library `Adafruit Fingerprint Sensor` และ `ESP8266WiFi`

### 2️⃣ **การเชื่อมต่อ Fingerprint Sensor AS608**
```plaintext
ESP8266/ESP32    Fingerprint Sensor AS608
-----------      --------------------
3.3V       ←→    VCC (Red)
GND        ←→    GND (Black)  
D2 (GPIO4) ←→    TX (White)
D3 (GPIO0) ←→    RX (Green)
```

### 3️⃣ **การกำหนดค่า WiFi และ API**
```cpp
const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";
const char* serverURL = "http://localhost:5000"; // หรือ Vercel URL
```

---

## 🌍 **Live Demo**
🔗 **Frontend**: [ProjectFitness-1 Dashboard](https://project-fitness-1-frontend.vercel.app/)  
🔗 **Backend API**: [ProjectFitness-1 API](https://project-fitness-1-backend.vercel.app/)  

---

## 📱 **Screenshots**

### 🏠 Dashboard
- ระบบ Login/Register
- หน้า Home พร้อมข้อมูลสถิติ
- รายการสมาชิก (Member List)

### 👥 Member Management  
- เพิ่ม/แก้ไข/ลบสมาชิก
- ระบบค้นหาสมาชิก
- จัดการลายนิ้วมือ

### 💰 Payment System
- ระบบ Daily Members
- การใช้รหัสรายวัน
- รายงานการชำระเงิน

---

## 🔧 **API Endpoints**

### Authentication
- `POST /api/login` - เข้าสู่ระบบ
- `POST /api/register` - ลงทะเบียนผู้ใช้ใหม่

### Members
- `GET /api/members` - ดูรายการสมาชิก
- `POST /api/members` - เพิ่มสมาชิกใหม่
- `PUT /api/members/:id` - แก้ไขข้อมูลสมาชิก
- `DELETE /api/members/:id` - ลบสมาชิก

### Daily Members
- `GET /api/dailymembers` - ดูรายการสมาชิกรายวัน
- `POST /api/dailymembers` - เพิ่มสมาชิกรายวัน
- `POST /api/dailymembers/use-code` - ใช้รหัสรายวัน

### Fingerprint
- `POST /api/fingerprint/enroll` - ลงทะเบียนลายนิ้วมือ
- `DELETE /api/fingerprint/delete` - ลบลายนิ้วมือ

---

## 🚀 **Deployment**

### Vercel Deployment
```bash
# ติดตั้ง Vercel CLI
npm i -g vercel

# Deploy Backend
cd Backend-main
vercel

# Deploy Frontend  
cd Frontend-main
vercel
```

### Environment Variables สำหรับ Production
```env
# Backend (Vercel)
DB_HOST=your-cloud-database-host
DB_USER=your-username  
DB_PASSWORD=your-password
DB_NAME=gym_management
NODE_ENV=production

# Frontend (.env)
REACT_APP_API_URL=https://your-backend.vercel.app
```

---

## 🤝 **Contributing**
1. Fork โปรเจกต์
2. สร้าง Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit การเปลี่ยนแปลง (`git commit -m 'Add some AmazingFeature'`)
4. Push ไปยัง Branch (`git push origin feature/AmazingFeature`)
5. เปิด Pull Request

---

## 📜 **License**
Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 **Author & Contact**
- **GitHub**: [@nickja054](https://github.com/nickja054)
- **Project**: [ProjectFitness-1](https://github.com/nickja054/ProjectFitness-1)
- **Email**: nickja054@gmail.com
- **Email**: benz.narongrit01@gmail.com

---

## 🙏 **Acknowledgments**
- Material-UI สำหรับ UI Components
- Vercel สำหรับ Hosting Platform  
- Arduino Community สำหรับ ESP และ Sensor Libraries

---

**เรียบเรียงและพัฒนาโดย: Patipan (nickja054) & Narongrit**

