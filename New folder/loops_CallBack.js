// //🙇‍♂️🙇‍♂️ CallBack Function.
function square(a){
    return a*a;
}
function sumOfSomething(a,b,callback){
    const val1=callback(a);
    const val2=callback(b);
    return val1+val2;
 
}

// console.log(sumOfSomething(1,3,function square(a){
//     return a*a;
// }));  
   //  👀👀 OR
   console.log(sumOfSomething(1,3, square));
       


