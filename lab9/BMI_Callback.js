function calBMI(w, h, callback) {
    console.log(`เริ่มทำการคำนวณ BMI ของคนน้ำหนัก ${w} ส่วนสูง ${h}`);

    setTimeout(() => {
        if (w <= 0 || h <= 0) {
            callback(null, 'น้ำหนักและส่วนสูงต้องมากกว่าศูนย์');
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

        callback(bmi, msg);
    }, 3000);
}

calBMI(50, 1.56, (result, msg) => {
    if (result !== null) {
        console.log(`BMI = ${result.toFixed(2)} ==> ${msg}`);
        console.log(`--------------------------------------------------`)
    }

    calBMI(45, 2, (result, msg) => {
        if (result !== null) {
            console.log(`BMI = ${result.toFixed(2)} ==> ${msg}`);
            console.log(`--------------------------------------------------`)
        }

        calBMI(80, 1.6, (result, msg) => {
            if (result !== null) {
                console.log(`BMI = ${result.toFixed(2)} ==> ${msg}`);
                console.log(`--------------------------------------------------`)
            }
        });
    });


});