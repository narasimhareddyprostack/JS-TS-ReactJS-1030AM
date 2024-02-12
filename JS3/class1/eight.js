class Account{
    acc_Id=101;
    acc_Name='Rahul Gandhi'
    acc_Bal = 50000 

   
    deposit_Amount(amount){
        console.log(amount, ":Amount Deposited Successfully")
    }
  

}


let a1= new Account()
a1.deposit_Amount(5001)

let a2 = new Account()
a2.deposit_Amount()