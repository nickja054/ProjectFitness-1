# FitnessManage - Smart Fitness Management System

🚀 **FitnessManage** เป็นระบบจัดการฟิตเนสอัจฉริยะที่รวม **Software** และ **Hardware** เพื่อให้การจัดการสมาชิกและอุปกรณ์ออกกำลังกายเป็นเรื่องง่ายและทันสมัย

---

## 🎯 **Features**
✅ **ระบบสมาชิกอัจฉริยะ** - จัดการสมาชิกแบบออนไลน์ เชื่อมต่อกับฐานข้อมูล MySQL
✅ **สแกนลายนิ้วมือ (Fingerprint)** - ใช้เซ็นเซอร์ AS608 และ ESP8266/ESP32 สำหรับระบุตัวตนสมาชิก
✅ **ปลดล็อคประตูด้วยลายนิ้วมือ** - ระบบเชื่อมต่อกับ Node.js API ผ่าน WiFi
✅ **Dashboard บริหารจัดการ** - พัฒนาโดย ReactJS ช่วยให้เจ้าของฟิตเนสตรวจสอบข้อมูลได้ง่าย
✅ **รองรับ IoT** - สื่อสารระหว่างอุปกรณ์และเซิร์ฟเวอร์ผ่าน HTTPS API
✅ **รองรับการใช้งานบน Cloud (Vercel)** - API ถูก deploy บน Vercel เพื่อความเร็วและเสถียรภาพ

---

## 🔧 **Tech Stack**
- **Frontend**: ReactJS, MUI
- **Backend**: Node.js, Express.js
- **Database**: MySQL, TiDB, Dbeaver
- **Hardware**: ESP8266/ESP32, Fingerprint Sensor AS608
- **Deployment**: Vercel

---

## 🚀 **Getting Started**
### 1️⃣ **Clone Repository**
```sh
 git clone https://github.com/Benramajub/ProjectFitness.git
 cd ProjectFitness
```

### 2️⃣ **ติดตั้ง Dependencies**
```sh
 npm install  # สำหรับ Backend
 cd frontend && npm install  # สำหรับ Frontend
```

### 3️⃣ **ตั้งค่า Database**
- สร้างฐานข้อมูล MySQL และตั้งค่าไฟล์ `.env`
```sh
 DB_HOST=your-database-host
 DB_USER=your-username
 DB_PASS=your-password
 DB_NAME=ProjectFitness
```

### 4️⃣ **เริ่มต้นระบบ**
```sh
 npm run dev  # สำหรับ Backend
 cd frontend && npm start  # สำหรับ Frontend
```

---

## 📡 **Hardware Setup**
1️⃣ **ติดตั้ง Library สำหรับ ESP8266/ESP32**
- ติดตั้ง `Arduino IDE`
- ติดตั้ง Library `Adafruit Fingerprint Sensor` และ `WiFiClient`

2️⃣ **อัปโหลดโค้ดไปยัง ESP8266/ESP32**
- เปิดไฟล์ `esp_firmware.ino`
- กำหนดค่า `WiFi SSID` และ `API URL`
- อัปโหลดไปยังบอร์ด ESP

3️⃣ **เชื่อมต่อ Fingerprint Sensor AS608**
```plaintext
 ESP8266      Fingerprint Sensor
 -----------  ------------------
 3.3V        VCC
 GND         GND
 D2 (RX)     TX
 D3 (TX)     RX
```

---

## 🌍 **Live Demo**
🔗 [FitnessManage Live Dashboard](https://frontend-gilt-pi-73.vercel.app/)

---

## 🤝 **Contributing**
- Fork โปรเจกต์
- สร้าง Branch ใหม่ (`git checkout -b feature/your-feature`)
- Commit และ Push (`git commit -m "Add new feature" && git push origin feature/your-feature`)
- ส่ง Pull Request

---

## 📜 **License**
Distributed under the MIT License. See `LICENSE` for more information.

---

## 💬 **Contact**
📧 Email: nickja054@gmail.com
📧 Email: benz.narongrit01@gmail.com

