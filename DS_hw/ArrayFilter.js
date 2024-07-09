// ตัวอย่างการใช้ Array.filter() เพื่อกรองข้อมูลในรูปแบบของอาร์เรย์ของ Object


const employee = [
    {empname:"Robert", department: "Accountance", salary: 25000},
    {empname:"Mary", department: "Computer", salary: 25000},
    {empname:"John", department: "Sales", salary: 15000},
    {empname:"Smith", department: "Computer", salary: 30000},
    ]
    const result = employee.filter((val) => val.salary >= 25000)    //ดึงข้อมูลเงินเดือน >=2500
    console.log(result)

    console.log("----------------")
    const employee2 = [
        {empname:"Robert", department: "Accountance", salary: 25000},
        {empname:"Mary", department: "Computer", salary: 25000},
        {empname:"John", department: "Sales", salary: 15000},
        {empname:"Smith", department: "Computer", salary: 30000},
        ]
        const result2 = employee2.filter((val) => val.salary >= 25000).filter((val) => val.department==="Computer") //ดึงข้อมูลเงินเดือน >=2500 และอยู่ในแผนกComputer
        console.log(result2)