// let array = [1, 235, 55];
//  let large = array[0];
// for (let index = 0; index < array.length; index++) {
    
//     if(array[index]>large){
//         large = array[index];
//     }
// }
// console.log(large);

const user={              // Object
    firstName:"Tushar",
    age:21

};
// accessing the elements.
console.log(user["firstName"]);
console.log(user["age"]);


// array of an object.
const allUser = [{
    firstName:"Tushar",
    age:21
},
   {
    firstName:"Rishu",
    age:23
   },
    {     
        firstName:"Rishi",
        age:27
    }

]
for (let index = 0; index < allUser.length; index++) {
   if (allUser[index]["firstName"][0]==="R") {           //OR  🚨🚨🚨  allUser[index].firstName[0] 
     console.log(allUser[index]["firstName"]);
   }
    
}

// Function

// function sum(a,b){
//     return a+b;
// }
//  const vlaue1 = sum(1,2);
//  const vlaue2 = sum(3,5);
//  console.log(vlaue1);
//  console.log(vlaue2);

// let sum  = 0;
// for (let index = 0; index < 10000000000; index++) {
//    sum+=index;
    
// }
// console.log(sum);


// function sum(num1,num2,fnToCall){   // fnToCall is arguement.
// let result = num1+num2;
// fnToCall(result);
// }

// function displayResult(data){
//     console.log("Result of the sum is :" + data);
// }

// function displayResultPassive(data){
//  console.log("Sum's result is :" + data);
// }

// Allowed to call one function only.
// How will you displayResult of a sum.

// sum(1,2,displayResult); // Callback function.


// Call Back function :- Passing a function inside the function 


//  function calculateMultiple(a,b,arthmeticMultiple){
//   const ans= arthmeticMultiple(a,b);
//   return ans;
//  } 

//  function Multiple(a,b){
//     return a*b;
//  }
//  const value = calculateMultiple(2,3,Multiple);
//  console.log(value);

// In-bulit Function for string operation.

// function findIndexof(str,target){
//    console.log(str.indexOf(target));
// }
//  findIndexof("Hello JS","JS");

//  const str = "Tushar Mishra";
//  console.log(str.replace("Tushar","Rishu"));
  //                         |      |
  //                       target  replacing with.    

//   const str = "TusharMishra CSE 3rd year";
//   const words  = str.split("h");
  //                         |
  //                     Delimiter(Stop,break and then continue) 
  // Splitting string  into an array
//   console.log(words);

// 🚨 It will not trim the whitspace b/w the Strings(Trim it from both ends merely).


// const str = "    Tushar    ";   
// console.log("Before trimming");
// console.log(str); 
// console.log("After the trimming");
// console.log(str.trim());

//🚨  Convert Entire String not single letter.

// const str = "Tushar";  
// console.log(str.toUpperCase());

// console.log(parseInt("345kjk"));
// console.log(parseInt("3.14"));

// let arr1=[1,2,3,4];
// let arr2=[5,6];
// console.log(arr1.concat(arr2));

// Class

// class Arthmetic {
//   constructor(num1,num2){
//     this.num1=num1;
//     this.num2=num2;
//   }
//   add(){
//     console.log(this.num1+this.num2);
//   }
//   sub(){
//     console.log(this.num1-this.num2);
//   }
// }

// let addn = new Arthmetic(3,2);   // Creating an object.
// let subn = new Arthmetic(3,2);

// addn.add();
// subn.sub();              // Call Function.

// const currentData = new Date();
// console.log("Time in millisecond since 1970:",currentData.getTime(),"ms");

// 🙇‍♂️- JSON.parse (Only JSON string can convert  into an object.)
//  🙇‍♂️ -JSON.stringify (Convert the object into String.)

// const users = '{ "name":"Tushar","age":21,"gender":"male"}'
// const user = JSON.parse(users)
// console.log(user["age"]);

const user = {
  name:"Tushar",
 gender:"Male" 
}
const finalString = JSON.stringify(user)
console.log(finalString)
