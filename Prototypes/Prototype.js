// function multiple(num){
//   return num * 5;
// }

// multiple.power = 2;
// console.log(multiple(5));
// console.log(multiple.power);
// console.log(multiple.prototype);


// function createUser(username,score){
//  this.username = username;
//  this.score = score;
// }

// createUser.prototype.increment = function(){
//     this.score++;
// }

// const val1= new createUser("tm",23);
// const val2 = new createUser("rm",33);
// val1.increment();
// console.log(val1);
// console.log(val2);


// let myName ="Tushar  "
// console.log(myName.trueLength);


// let heroPower ={
//     thor:"hammmer",
//     spiderman:"sling",

//     getSpiderPower: function(){
//         console.log(`Spidy Power is ${this.spiderman}`);
//     }
// }

// Object.prototype.Tushar = function(){    // 🚨🚨👀🙇‍♂️🚨 It provide common functionality to all Object.
//     console.log("Present");
// }

// heroPower.Tushar();


// let heroPower2 ={
//     thor:"hammmer",
//     spiderman:"sling",

//     getSpiderPower: function(){
//         console.log(`Spidy Power is ${this.spiderman}`);
//     }
// }
// heroPower2.Tushar();

Object.prototype.trueLength= function(){
    console.log(`True length is ${this.trim().length}`);
}

"Tushar   ".trueLength();

let count = "fhfhf";
count.trueLength();