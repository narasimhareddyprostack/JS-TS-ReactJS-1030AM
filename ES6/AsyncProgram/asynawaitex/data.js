let employees=[
    {id:101,name:"Rahul",salary:45000},
    {id:102,name:"Sonia",salary:55000}
]
let createEmployee=(emp)=>{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
                let dbflag=true
                if(dbflag){
                    resolve('Data Inserted')
                    employees.push(emp)
                }
                else{
                    reject("Failed")
                }

        },4000)
    })
}
let getEmployees=()=>{
    setTimeout(()=>{
        let rows=""
        for(employee of employees){
            rows = rows +` <tr>
                            <td>${employee.id}</td>
                            <td>${employee.name}</td>
                            <td>${employee.salary}</td>
                             </tr>`
        }
        document.getElementById('abc').innerHTML =rows
    },2000)
}
let exec =async ()=>{
    await createEmployee({id:103,name:"Priyanka",salary:65000})
    getEmployees()
}
exec()