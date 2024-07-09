// การใช้Array map()
const myarray=[10, 20, 30, 40]
console.log(`ข้อมูลใน array เดิมคือ ${myarray}`)
const newarray = myarray.map(value => {
const newvalue = value+5
return newvalue
})
console.log(`ข้อมูล array ใหม่คือ ${newarray}`)


console.log("----------------")
// การใช้Array map เขียนแบบลดรปู
const myarray2=[10, 20, 30, 40]
console.log(`ข้อมูลใน array เดิมคือ ${myarray2}`)
const newarray2 = myarray2.map(value => value+5)
console.log(`ข้อมูล array ใหม่คือ ${newarray2}`)



// การใช้Array map() กับข้อมูลที่เป็นเ object
console.log("----------------")
const myActivity=[
    {day: "วันจันทร์", activity: "ขี่จักรยาน"},
    {day: "วันอังคาร", activity: "ว่ายน้ำ"},
    {day: "วันพธุ ",  activity: "ตีแบด"},
    {day: "วันพฤหัส", activity: "วิ่ง"},
    {day: "วันศุกร์",  activity: "แอโรบิค"},
    ]
    console.log(myActivity.map((value)=> value))

console.log("----------------")
const myActivity2=[
    {day: "วันจันทร์", activity: "ขี่จักรยาน"},
    {day: "วันอังคาร", activity: "ว่ายน้ำ"},
    {day: "วันพธุ ",  activity: "ตีแบด"},
    {day: "วันพฤหัส", activity: "วิ่ง"},
    {day: "วันศุกร์",  activity: "แอโรบิค"},
    ]
    const result = myActivity2.map((value, i) => {
    return `${i+1}. ${value.day} ทำกิจกรรมคือ ${value.activity}`
    })
    console.log(result)

