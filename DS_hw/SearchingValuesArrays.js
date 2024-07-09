/*
// การใช้indexOf
const myfriend = ["Robert", "Bob", "Jacky", "Peter", "Willy"]
const index = myfriend.indexOf("Peter")
console.log(index)
*/

/*
// การใช้indexOf
const myfriend = ["Robert", "Bob", "Jacky", "Peter", "Willy"]
const index = myfriend.indexOf("Jane")
console.log(index)
*/

/*
// การใช้คำสั่ง find() แสดงผลข้อมูลใน Array ที่เจอ
const myfriend = ["Robert", "Bob", "Jacky", "Peter", "Willy"]
const result = myfriend.find((value) => value==="Peter")
console.log(result)
*/



// การใช้คำสั่ง find() แสดงผลข้อมูลใน Array ที่เจอ และลําดับที่ของข้อมูลใน Array นั้นด้วย
const myfriend = ["Robert", "Bob", "Jacky", "Peter", "Willy"]
myfriend.find((value, index) => {
if (value==="Peter")
console.log(`Array number ${index+1} is ${value}`)
})


/*
// การใช้คำสั่ง findIndex()
const myfriend = ["Robert", "Bob", "Jacky", "Peter", "Willy"]
const result = myfriend.findIndex((value) => value==="Peter")
console.log(result)
*/