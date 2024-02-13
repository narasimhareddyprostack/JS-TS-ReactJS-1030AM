class Account{
    acc_Id;
    acc_Name;
    acc_Bal;
    constructor(id,name,amount){
        this.acc_Id =id
        this.acc_Name =name ;
        this.acc_Bal = amount
    }
    deposit_Amount(amount){
        this.acc_Bal = this.acc_Bal + amount
    }
}
let a1= new Account(101,"Rahul",10)
let a2= new Account(102,"Sonia",20)
console.log(a1)
console.log(a2)

a1.deposit_Amount(1000)
a2.deposit_Amount(2000)
console.log("*******")
console.log(a1)
console.log(a2)
