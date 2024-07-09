//1. join()
const data = [10,20, 30]
console.log(data)
const result1 = data.join()
console.log(` value of result1 = ${result1}`)
const result2 = data.join("|")
console.log(` value of result2 = ${result2}`)
/*result:
[ 10, 20, 30 ]
 value of result1 = 10,20,30
 value of result2 = 10|20|30
 */

 //2.concat()
const data1 = [10, 20, 30]
const data2 = [40, 50, 60, 70]
const data3 = data1.concat(data2)
console.log(data3)
/*result:
[
  10, 20, 30, 40,
  50, 60, 70
]
*/

//3. เปรียบเทียบกับการใช้spread operator
const data01 = [10, 20, 30]
const data02 = [...data01, 40, 50, 60, 70]
console.log(data02)