// การใช้array reduce
const myarray = [10, 20, 30, 40, 50]
const result = myarray.reduce((total, value)=> {
return total += value
}, 0)
console.log(result)

/*

// การใช้array reduce แบบลดรูป
const myarray = [10, 20, 30, 40, 50]
const result = myarray.reduce((total, value)=> total += value, 0)
console.log(result)

*/