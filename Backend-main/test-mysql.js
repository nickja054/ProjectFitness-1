const mysql = require('mysql2');

// MySQL configuration
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'gym_management',
    port: 3306
};

console.log('🔍 ทดสอบการเชื่อมต่อ MySQL Database...\n');

const db = mysql.createConnection(dbConfig);

// เชื่อมต่อ database
db.connect((err) => {
    if (err) {
        console.error('❌ Error connecting to MySQL database:', err);
        return;
    }
    console.log('✅ เชื่อมต่อ MySQL สำเร็จ!\n');

    // ทดสอบดึงข้อมูล users
    db.query("SELECT * FROM users", (err, results) => {
        if (err) {
            console.error('❌ Error fetching users:', err);
        } else {
            console.log('✅ ข้อมูล Users:');
            console.table(results);
        }
    });

    // ทดสอบดึงข้อมูล members
    db.query("SELECT * FROM members", (err, results) => {
        if (err) {
            console.error('❌ Error fetching members:', err);
        } else {
            console.log('\n✅ ข้อมูล Members:');
            console.table(results);
        }
    });

    // ทดสอบดึงข้อมูล dailymembers
    db.query("SELECT * FROM dailymembers", (err, results) => {
        if (err) {
            console.error('❌ Error fetching dailymembers:', err);
        } else {
            console.log('\n✅ ข้อมูล Daily Members:');
            console.table(results);
        }
        
        // ปิดการเชื่อมต่อ
        db.end();
        console.log('\n🔒 Database connection closed');
    });
});