// Async function to calculate BMI
async function calBMIAsync(w, h) {
    console.log(`เริ่มทำการคำนวณ BMI ของคนน้ำหนัก ${w} ส่วนสูง ${h}`);
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (w <= 0 || h <= 0) {
                reject('น้ำหนักและส่วนสูงต้องมากกว่าศูนย์');
                return;
            }

            const bmi = w / (h * h);
            let msg = '';

            if (bmi <= 18.5) {
                msg = 'You have underweight';
            } else if (bmi <= 24.9) {
                msg = 'You have normal weight';
            } else if (bmi <= 29.9) {
                msg = 'You have overweight';
            } else {
                msg = 'You are obesity';
            }

            resolve({ BMI: bmi, txt: msg });
        }, 3000);
    });
}

async function calculateAll() {
    //ใช้บล็อก try...catch เพื่อตรวจจับข้อผิดพลาด หากเกิดข้อผิดพลาดระหว่างการคำนวณ BMI จะมีการจับและพิมพ์ข้อความแสดงข้อผิดพลาดในคอนโซล
    try { 
        let result = await calBMIAsync(50, 1.56); //ฟัรอผลลัพธ์ด้วย await หมายความว่าการดำเนินการของฟังก์ชันจะหยุดชั่วคราวจนกว่าค่า Promise จะถูก resolve หรือ reject
        console.log(`BMI = ${result.BMI.toFixed(2)} ==> ${result.txt}`);
        console.log(`--------------------------------------------------`);

        result = await calBMIAsync(45, 2.0);
        console.log(`BMI = ${result.BMI.toFixed(2)} ==> ${result.txt}`);
        console.log(`--------------------------------------------------`);

        result = await calBMIAsync(80, 1.6);
        console.log(`BMI = ${result.BMI.toFixed(2)} ==> ${result.txt}`);
        console.log(`--------------------------------------------------`);
    } catch (error) {
        console.error(error);
    }
}
calculateAll();
//calculateAll เพื่อเริ่มกระบวนการคำนวณ BMI สำหรับแต่ละคนตามลำดับ
