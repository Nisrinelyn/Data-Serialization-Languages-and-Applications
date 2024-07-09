//1
const student = {
    studentName: "Robert Lee",
    address: "USA",
    telephone: "2433333"
    }
    console.log(student)
    console.log(student.studentName)
    console.log(student.address)
    console.log(student.telephone)


    

//2
studentName="Robert Lee"
address="USA"
telephone="2433333"
const student2 = {
    studentName: studentName,
    address: address,
    telephone: telephone
}
console.log(student.studentName)
console.log(student.address)
console.log(student.telephone)

//3
studentName="Robert Lee"
address="USA"
telephone="2433333"
const student3 = {
    studentName,
    address,
    telephone
}
console.log(student.studentName)
console.log(student.address)
console.log(student.telephone)


/*
ผลลัพธ์ของทั้ง 3 ตังอย่าง :
Robert Lee
USA
2433333

*/