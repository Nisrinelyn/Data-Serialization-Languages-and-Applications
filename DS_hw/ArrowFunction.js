//1
// การเขยีน function แบบเดิม
function fullname(fname, lname) {
    return ("My name is "+fname+" "+lname)
    }
    console.log(fullname("Ngamnij", "Archint"))

    //2
// การใช้Arrow function
fullname=(fname, lname)=>"My name is "+fname+" "+lname
console.log(fullname("Ngamnij", "Archint"))

    //3
// การใช้Arrow function
fullname=(fname, lname)=> `My name is ${fname} ${lname}`
console.log(fullname("Ngamnij", "Archint"))