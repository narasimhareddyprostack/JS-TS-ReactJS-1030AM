let numbers=[1,2,3,4,5,6,7,8,9,10]
//create new array with even numbers
let even_Numbers=numbers.filter((number)=>{
    return number%2 ==0
})
console.log(even_Numbers)