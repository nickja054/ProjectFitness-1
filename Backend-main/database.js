const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const path = require('path');

// สร้าง database file
const dbPath = path.join(__dirname, 'gym_management.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err);
    } else {
        console.log('✅ Connected to SQLite database');
        initializeDatabase();
    }
});

function initializeDatabase() {
    // สร้างตารางต่างๆ
    db.serialize(() => {
        // Users table
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            Email TEXT UNIQUE NOT NULL,
            Password TEXT NOT NULL,
            fname TEXT NOT NULL,
            lname TEXT NOT NULL
        )`);

        // Members table
        db.run(`CREATE TABLE IF NOT EXISTS members (
            id INTEGER PRIMARY KEY,
            firstName TEXT NOT NULL,
            lastName TEXT NOT NULL,
            age INTEGER NOT NULL,
            phone TEXT NOT NULL,
            email TEXT NOT NULL,
            duration INTEGER NOT NULL,
            originalPrice REAL NOT NULL,
            points INTEGER DEFAULT 0,
            discount REAL DEFAULT 0.00,
            startDate TEXT NOT NULL,
            endDate TEXT NOT NULL,
            status TEXT DEFAULT 'Active',
            hasFingerprint INTEGER DEFAULT 0
        )`);

        // Payments table
        db.run(`CREATE TABLE IF NOT EXISTS payments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            memberId INTEGER,
            amount REAL NOT NULL,
            date TEXT NOT NULL
        )`);

        // Daily members table
        db.run(`CREATE TABLE IF NOT EXISTS dailymembers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            amount REAL NOT NULL,
            code TEXT NOT NULL,
            uses_remaining INTEGER DEFAULT 2,
            date TEXT NOT NULL
        )`);

        // Fingerprints table
        db.run(`CREATE TABLE IF NOT EXISTS fingerprints (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            fingerprint_id INTEGER NOT NULL,
            member_id INTEGER NOT NULL,
            template BLOB,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`);

        // Scan logs table
        db.run(`CREATE TABLE IF NOT EXISTS scan_logs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            member_id INTEGER NOT NULL,
            scan_time DATETIME DEFAULT CURRENT_TIMESTAMP
        )`);

        // Daily reports table
        db.run(`CREATE TABLE IF NOT EXISTS dailyreports (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date TEXT NOT NULL,
            total_members INTEGER DEFAULT 0,
            total_scans INTEGER DEFAULT 0,
            total_payments REAL DEFAULT 0.00,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`);

        // เพิ่มข้อมูลตัวอย่าง
        insertSampleData();
    });
}

function insertSampleData() {
    // เพิ่ม users
    const hashedPassword = bcrypt.hashSync('123456', 10);
    
    db.run(`INSERT OR IGNORE INTO users (Email, Password, fname, lname) VALUES (?, ?, ?, ?)`, 
        ['test@gym.com', hashedPassword, 'Test', 'User']);
    
    db.run(`INSERT OR IGNORE INTO users (Email, Password, fname, lname) VALUES (?, ?, ?, ?)`, 
        ['admin@gym.com', hashedPassword, 'Admin', 'User']);

    // เพิ่ม members
    db.run(`INSERT OR IGNORE INTO members (id, firstName, lastName, age, phone, email, duration, originalPrice, points, discount, startDate, endDate, status, hasFingerprint) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
        [1, 'John', 'Doe', 25, '0123456789', 'john@example.com', 30, 1500.00, 0, 0.00, '2025-01-01', '2025-01-31', 'Active', 0]);
    
    db.run(`INSERT OR IGNORE INTO members (id, firstName, lastName, age, phone, email, duration, originalPrice, points, discount, startDate, endDate, status, hasFingerprint) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
        [2, 'Jane', 'Smith', 30, '0987654321', 'jane@example.com', 60, 2800.00, 0, 0.00, '2025-01-01', '2025-03-02', 'Active', 0]);

    // เพิ่ม daily members
    db.run(`INSERT OR IGNORE INTO dailymembers (name, amount, code, uses_remaining, date) VALUES (?, ?, ?, ?, ?)`, 
        ['เบน', 100.00, '2144', 2, '2025-02-04']);
    
    db.run(`INSERT OR IGNORE INTO dailymembers (name, amount, code, uses_remaining, date) VALUES (?, ?, ?, ?, ?)`, 
        ['Narongrit', 100.00, '4047', 2, '2025-02-08']);

    console.log('✅ Sample data inserted');
}

module.exports = db;