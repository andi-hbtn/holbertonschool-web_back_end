// 'use strict';

// function standaloneFunction() {
//     console.log(this); // In non-strict mode, `this` refers to the global object
// }

// standaloneFunction(); 


// function sayHello(message){
//     this.message = message;
//     const self = this;
//     this.printMessage = () =>{
//         console.log("self----",self)
//         return self.message;
//     }
// }

// const hello = new sayHello("hello");
// hello.printMessage();


// function sayHello(){
//     this.helloMessage = ()=>{
//         return this;
//     }
// }

// const message = new sayHello();
// console.log("hello---",message.helloMessage());

// const myObject = {
//     name:"name",
//     age:25,
//     printData:function(){
//         console.log("this-----",this);
//         return this.age + " "+ this.name
//     }
// }
// console.log("myObject---",myObject.printData());



class getNeighborhoodsList{
    constructor(){
      this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
    }
    
    addNeighborhood(newNeighborhood){
        this.sanFranciscoNeighborhoods.push(newNeighborhood);
        return this.sanFranciscoNeighborhoods
    }
  
  }

const myTest = new getNeighborhoodsList();
console.log("myTest----",myTest.addNeighborhood("hello"))