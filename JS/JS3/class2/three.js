class Account{
    acc_Id;
    acc_Name;
    acc_Bal;

    constructor(id,name,amount){
        this.acc_Id = id
        this.acc_Name =name
        this.acc_Bal = amount
        console.log("Account class Constructor")
    }
    get_Details(){
        console.log("GM")
    }
}
var a1=new Account(101,"Rahul", 1500)
console.log(a1)
var a2=new Account(102, "Sonia",6000)
console.log(a2)