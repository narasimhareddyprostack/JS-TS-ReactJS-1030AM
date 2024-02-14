class Account{
    
    
    constructor(name,email){
        console.log("Parent Class Constructor")
        this.acc_Name = name 
        this.acc_Email =email
    }
}
class SA extends Account{
   
    
    min_Bal = 500;
    constructor(id, name,email,amount){
        super(name,email)
        this.acc_Id = id 
        this.acc_Bal =amount
    }
    get_Bal(){
        return this.acc_Bal - this.min_Bal
    }
}

class CA extends Account{
   
    min_Bal = 25000
    constructor(id, name,email,amount){
        super(name,email)
        this.acc_Id = id 
        this.acc_Bal = amount
    }
    get_Bal(){
        return this.acc_Bal - this.min_Bal
    }
}

let sa1=new SA(101,"Rahul","RG@gmail.com",50000)


let ca1= new CA(102, "Priyanka","pg@gmail.com", 2500000);
//console.log(sa1)
console.log(sa1.get_Bal())

console.log(ca1.get_Bal())