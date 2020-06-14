class Dinglemouse{

    constructor(firstName, lastName){
       this.firstName=firstName;
       this.lastName=lastName;
    }
    
    getFullName(){
        if(this.firstName==''){
            return this.lastName;
           }else if(this.lastName==''){
            return this.firstName;  
           }
           return this.firstName+" "+this.lastName
    }
    
  }

var person = new Dinglemouse('Anis', 'Zarrouk').getFullName();  

console.log(person)