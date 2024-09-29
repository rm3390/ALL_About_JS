// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// 👀👀🙇‍♂️👀 falsy Values--->   flase , 0 , -0 , BigInt 0n , "" , null , undefines , NaN

// 👀🙇‍♂️👀🙇‍♂️👀       Truthy Values-->   "0" , " " , [] , "flase" , {} , function(){} ....



// const value = [];
// const value = "";
// const value = " ";
// const value =NaN;
// const value= undefined;
// const value = -0;

// if (value) {
//     console.log("Under if statement");
// }
// else {
//     console.log("Under the else statement");
// }


// 👀🙇‍♂️👀 Nullish Coalescing Operator (??) : null undefined

// let val1= 5 ?? 10;
// let val1= null ?? 20;
// let val1= null ?? undefined;
// let val1= undefined ?? 20;
let val1= null ?? 10 ?? 20;
console.log(val1);