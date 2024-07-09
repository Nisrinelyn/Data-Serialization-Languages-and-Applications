

//1. ยังไม่มีการเรียกใช้Rest Parameter
summation=(x, y, z) => {
    return (x+y+z)
    }
    1
    console.log(summation(10, 5, 10))

//2. ยังไม่มีการเรียกใช้Rest Parameter
summation=(x, y, z) => {
    return (x+y+z)
    }
    console.log(summation(10, 5, 10, 20))

//3. ยังไม่มีการเรียกใช้Rest Parameter
summation=(x, y, z) => {
    return (x+y+z)
    }
    console.log(summation(10, 5))

//--------------------------------------------

//1.มีการเรียกใช้ Rest Parameter
summation=(...numberArr) => {
    for (let num of numberArr) {
    console.log(num)
    }
}
summation(10, 5)

//2.มีการเรียกใช้ Rest Parameter
summation=(...numberArr) => {
    let total = 0
    for (let num of numberArr)
    total += num
    return(total)
    }
    console.log(summation(10, 5))
    console.log(summation(10, 5, 10))
    console.log(summation(10, 5, 10, 15))