let numbers=[1,2,3,4,5,6,7,8,9,10]
//create new array with even numbers

let even_Numbers=[]
for( number of numbers){
    if(number % 2 ==0){
        even_Numbers.push(number)
    }
}
console.log(even_Numbers)