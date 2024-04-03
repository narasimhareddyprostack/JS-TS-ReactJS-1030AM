class Account{
    acc_Bal=0
    deposit_Amount(amount){
        this.acc_Bal = this.acc_Bal +amount
    }
    get_Bal(){

    }
}
let a1 = new Account()
console.log(a1)   // {acc_Bal:0}
a1.deposit_Amount(5000)
console.log(a1)  // {acc_Bal:5000}
a1.deposit_Amount(50)
console.log(a1)  // {acc_Bal:5050}
a1.deposit_Amount(500)
console.log(a1)  // {acc_Bal:5050}

