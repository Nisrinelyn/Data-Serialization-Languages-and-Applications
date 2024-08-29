function calBMIPromise(w, h) {
    console.log(`เริ่มทำการคำนวณ BMI ของคนน้ำหนัก ${w} ส่วนสูง ${h}`);
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (w <= 0 || h <= 0) {
                reject('น้ำหนักและส่วนสูงต้องมากกว่าศูนย์'); //reject: หากมีปัญหา เช่น น้ำหนักหรือส่วนสูงน้อยกว่าหรือเท่ากับศูนย์ ฟังก์ชันจะหยุดทำงานและส่งข้อความข้อผิดพลาดกลับไป
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

            resolve({ BMI: bmi, txt: msg }); //resolve: หากการคำนวณเสร็จสมบูรณ์โดยไม่มีปัญหา ฟังก์ชันจะส่งผลลัพธ์กลับไปในรูปแบบของ object { BMI, txt }
        }, 3000);
    });
}

calBMIPromise(50, 1.56)
    .then(({ BMI, txt }) => {
        console.log(`BMI = ${BMI.toFixed(2)} ==> ${txt}`);
        console.log(`--------------------------------------------------`);
        return calBMIPromise(45, 2);
    })
    //ฟังก์ชัน then จะส่งต่อไปยังการคำนวณ BMI สำหรับคนที่สอง
    .then(({ BMI, txt }) => {
        console.log(`BMI = ${BMI.toFixed(2)} ==> ${txt}`);
        console.log(`--------------------------------------------------`);
        return calBMIPromise(80, 1.6);
    })
    .then(({ BMI, txt }) => {
        console.log(`BMI = ${BMI.toFixed(2)} ==> ${txt}`);
        console.log(`--------------------------------------------------`);
    })
    //หากเกิดข้อผิดพลาดขึ้นในกระบวนการคำนวณ (เช่น น้ำหนักหรือส่วนสูงไม่ถูกต้อง) ข้อความแสดงข้อผิดพลาดจะถูกพิมพ์ในคอนโซลผ่าน catch
    .catch((error) => {
        console.error(error);
    });
