
function calculateBMI(w, h) {
    const bmi = w / (h * h);
    let txt = '';

    if (bmi <= 18.5) {
        txt = 'You have underweight';
    } else if (bmi <= 24.9) {
        txt = 'You have normal weight';
    } else if (bmi <= 29.9) {
        txt = 'You have overweight';
    } else {
        txt = 'You are obesity';
    }

    // ส่งค่า BMI และข้อความกลับไปในรูปแบบของ object
    return { BMI: bmi, txt: txt };
}

// ส่งออกฟังก์ชัน calculateBMI ให้สามารถเรียกใช้งานจากไฟล์อื่นได้
module.exports = calculateBMI;
