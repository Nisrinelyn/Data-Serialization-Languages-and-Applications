// การใช้for(loop)
const myarray=[10, 20, 30, 40, 50]
for (let i=0; i<myarray.length; i++) {
console.log(`สมาชิกลำดับที่${i} = ${myarray[i]}`)
}

console.log("----------------")
// การใช้for(loop)
const myarray2=[10, 20, 30, 40, 50]
for (let i=0; i<myarray2.length; i++) {
if (myarray2[i] > 30) break
console.log(`สมาชิกลำดับที่${i} = ${myarray2[i]}`)
}

console.log("----------------")
// การใช้forEach
const myarray3=[10, 20, 30, 40, 50]
myarray3.forEach(value => {
console.log(`สมาชิก = ${value}`)
})

console.log("----------------")
// การใช้forEach
const myarray4=[10, 20, 30, 40, 50]
let total = 0
myarray4.forEach(value => {
total += value
console.log(`ผลรวม = ${total}`)
})

console.log("----------------")
// การใช้forEach
const myarray5=[10, 20, 30, 40, 50]
myarray5.forEach(value => {
console.log(`สมาชิก = ${value}`)
})

console.log("----------------")
// การใช้forEach
const myarray6=[10, 20, 30, 40, 50]
let total6 = 0
myarray6.forEach(value => {
total6 += value
console.log(`ผลรวม = ${total6}`)
})

console.log("----------------")
// การใช้forEach
const myposts=[
    {title: "My post1 title", body: "My post1 body"},
    {title: "My post2 title", body: "My post2 body"},
    {title: "My post3 title", body: "My post3 body"}
    ]
    myposts.forEach((post, index) => {
    console.log(`หัวข้อที่${index+1} : ${post.title} ข้อความคือ ${post.body}`)
    })

// การใช้for ( of )
console.log("----------------")
const myarray_x=[10, 20, 30, 40, 50]
for (let value of myarray_x) {
console.log(`สมาชิก = ${value}`)
}

console.log("----------------")
const myarray_y=[10, 20, 30, 40, 50]
let total_y = 0
for (let value of myarray_y) {
    if (value > 30) break
    total_y += value
    console.log(`ผลรวม = ${total_y}`)
}
