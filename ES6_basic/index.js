
// const myName = "john";
// let newName = "Tim";

// const myObject = {
//     name: "John",
//     email: "john.doe@gmail.com",
//     age: 25,
//     isDeveloper: true,
//     is_present: null,
//     skills: {
//         frontend: "Javascript",
//         backend: "typescript",
//         database: "Mysql",
//     }
// }

// myObject.lastname = "Doe";

// console.log(myObject.email);
// console.log(myObject['email']);


// function sayHello(username) {
//     return "hello from " + username ;
// }

// console.log(sayHello("John") );


// function printSum(p1,p2,p3){
//     return p1 + p2 + p3;
// }

// console.log(printSum(1,'2',3));



// const skills = " is a software developer ";

// function printData() {
//     const myName = "john" + skills ;
//     return myName;
// }

// console.log(printData());


// function sayHello() {
//     if (1 == 2) {
//         return "jane te barabarta";
//     }
//     return "nuk jane te barabarta";
// }

// console.log(sayHello());


// const myData = ["message",0,true];

// console.log(myData.length)


//**********************************this context************************************** *//

// function showData() {
//     this.name = "name";
//     return this.name;
// }


// console.log(showData());



// const myObject = {
//     name: "John",
//     email: "john.doe@gmail.com",
//     age: 25,
//     printData: function () {
//         return this.name + this.email + this.age;
//     }
// }

// console.log(myObject.printData());



// function user(name, lastname, email) {
//     name = "new Name";
//     lastname;
//     email;

//     return { name, lastname, email };
// }

// const John = new user("john", "Doe", "john.doe@gmail.com");


// const Tim = new user("Tim", "Doe", "Tim.doe@gmail.com");
// const Bob = new user("Bob", "Doe", "Bob.doe@gmail.com");

// console.log("---", John)
// console.log("---", Tim)

// const sayHi = (name, lastname) => {
//     this.name = name;
//     this.lastname = lastname;

//     return this.name + " " + this.lastname;
// }


const numbers = [1, 2, 3];
const sentence = 'Today is friday';
console.log(...sentence);