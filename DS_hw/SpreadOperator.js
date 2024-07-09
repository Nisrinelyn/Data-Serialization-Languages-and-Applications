//1
// การแทรกข้อมูล array ภายใน array ด้วยกัน
const array1 = [30, 40, 50]
const array2 = [10, 20, array1]
console.log(array2)
console.log(array2.length)
/*result:
[ 10, 20, [ 30, 40, 50 ] ]
3
*/

//2
// การใช้spread operator
const array1_1 = [30, 40, 50]
const array2_2 = [10, 20, ...array1_1]
console.log(array2_2)
console.log(array2_2.length)
/*result:
[ 10, 20, 30, 40, 50 ]
5
*/


//3
// การใช้ร่วมกับคำสั่ง push
const friend = ["Robert", "Mary"]
const allFriend = ["Willy", "Peter", ...friend]
const newFriend = ["Jane", "Bob"]
allFriend.push(newFriend)
console.log(allFriend)
console.log(allFriend.length)
/*ผลลัพธ์:
[ 'Willy', 'Peter', 'Robert', 'Mary', [ 'Jane', 'Bob' ] ]
5
*/

/*
//4
// การใช้ร่วมกับคำสั่ง push
const friend = ["Robert", "Mary"]
const allFriend = ["Willy", "Peter", ...friend]
const newFriend = ["Jane", "Bob"]
allFriend.push(...newFriend)
console.log(allFriend)
console.log(allFriend.length)
/*result
[ 'Willy', 'Peter', 'Robert', 'Mary', 'Jane', 'Bob' ]
6
*/
