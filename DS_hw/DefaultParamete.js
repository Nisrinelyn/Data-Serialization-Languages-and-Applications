/*

//1.ไม่มีการใช้โครงสร้าง DEFAULT PARAMETER
getPersonDetail=(personName, education)=> {
    if (!education) {
    education = "Bachelor"
    }
    const person = `ชื่อ: ${personName}
    ระดับการศึกษา: ${education}`
    return(person)
    }
    console.log(getPersonDetail("Robert", "Master"))
    console.log(getPersonDetail("Mary"))

*/

//2.DEFAULT PARAMETER
getPersonDetail=(personName, education="Bachelor")=> {
    const person = ` ชื่อ: ${personName}
    ระดับการศึกษา: ${education}`
    return(person)
    }
    console.log(getPersonDetail("Robert"))
    console.log(getPersonDetail("Mary"))
    console.log(getPersonDetail("Bob", "PhD"))