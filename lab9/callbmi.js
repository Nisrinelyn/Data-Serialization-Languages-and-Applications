
// นำเข้า (import) ฟังก์ชัน calculateBMI จากไฟล์ BMI_UserModel.js
const calculateBMI = require('./BMI_UserModel');

// กำหนดค่าน้ำหนักและส่วนสูงที่ต้องการคำนวณ
const w1 = 70;
const h1 = 1.75;

// เรียกใช้ฟังก์ชัน calculateBMI และเก็บผลลัพธ์ที่ได้ไว้ในตัวแปร result
const result = calculateBMI(w1, h1);


console.log(`BMI = ${result.BMI.toFixed(2)} ==> ${result.txt}`);
