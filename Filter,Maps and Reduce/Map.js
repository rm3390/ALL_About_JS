const arr=[1,2,3,4,5]


// const newArr= arr.map((num)=>num+10);
// const newArr= arr.map((num)=>{
//     return num+10});
// console.log(newArr);

// Chaining.

const newArr=arr
                .map((num)=> num*10)
                .map((num)=> num + 1)      // 🚨🚨🙇‍♂️👀 num(parameter)  --> 10,20,30..
console.log(newArr);                
