const db = require('./database.js');

// ทดสอบการดึงข้อมูลจาก database
console.log('🔍 ทดสอบการเชื่อมต่อ Database...\n');

// ทดสอบดึงข้อมูล users
db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) {
        console.error('❌ Error fetching users:', err);
        return;
    }
    console.log('✅ ข้อมูล Users:');
    console.table(rows);
});

// ทดสอบดึงข้อมูล members
db.all("SELECT * FROM members", [], (err, rows) => {
    if (err) {
        console.error('❌ Error fetching members:', err);
        return;
    }
    console.log('\n✅ ข้อมูล Members:');
    console.table(rows);
});

// ทดสอบดึงข้อมูล dailymembers
db.all("SELECT * FROM dailymembers", [], (err, rows) => {
    if (err) {
        console.error('❌ Error fetching dailymembers:', err);
        return;
    }
    console.log('\n✅ ข้อมูล Daily Members:');
    console.table(rows);
});

setTimeout(() => {
    db.close();
    console.log('\n🔒 Database connection closed');
}, 1000);