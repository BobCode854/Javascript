

/**
 *    ES6 Features - Chaining Of Methods
 * ===========================
 *     **) execution chaining .
 *     **) we have to return this as an object for performing this.
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

            //     intial_amount is a number , so we cannot perform chaining.
            //     we need to return object , then only we can perform chaining.
            //     this will return current object

            return this;
        }
     }
     deposit(amount){
        this.intital_amount = this.intital_amount+amount
         return this;
     }

     balanceEnquiry(){
        console.log("current balance : "+this.intital_amount)
     }
   }

   let bankaccountInstance = new BankAccount("Karan",500);
bankaccountInstance.deposit(1000).withdraw(400).deposit(600).balanceEnquiry();
