let emp={
        id:101,
        name:"Rahul",
        email:"Rahul@gmail.com"
}
let new_Emp={}
for(prop in emp){
    new_Emp[prop] = emp[prop]
}
console.log(new_Emp)