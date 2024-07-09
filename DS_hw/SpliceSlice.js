// การใช้ splice()
const myarray = [10, 20, 30, 40, 50, 60]
myarray.splice(2, 3)
console.log(myarray)

console.log("----------------")

// การใช้ splice()
const myarray2 = [10, 20, 30, 40, 50, 60]
myarray2.splice(2, 3, 100, 200)
console.log(myarray2)


console.log("----------------")


// การใช้slice()
const myarray3= [10, 20, 30, 40, 50, 60]
newarray= myarray3.slice(2, 5)
console.log(newarray)