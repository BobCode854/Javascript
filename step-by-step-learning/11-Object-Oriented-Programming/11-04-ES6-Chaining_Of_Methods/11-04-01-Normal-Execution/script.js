console.log("hello")

/**
 *    ES6 Features - Normal execution flow in bank account
 * ===========================
 *     
 * 
 *  */

class BankAccount {
   constructor( name, intital_amount=0){
     this.name=name;
     this.intital_amount=intital_amount;
   }
     withdraw(amount){
        if(this.intital_amount<amount){
            console.error("Amount is not sufficient")
        }
        else{
            this.intital_amount = this.intital_amount-amount;
            console.log("Remaining amount : "+this.intital_amount)
        }
     }
     deposit(amount){
        this.intital_amount = this.intital_amount+amount
        console.log("Amount updated after deposit : "+this.intital_amount)
     }

     balanceEnquiry(){
        console.log("current balance : "+this.intital_amount)
     }
   }

   let bankaccountInstance = new BankAccount("Karan",500);
   bankaccountInstance.deposit(400);
   bankaccountInstance.withdraw(1000);