  // const promiseOne = new Promise((resolve,reject)=>{
  // // Do an Async  Task.
  // setTimeout(()=>{
  //   console.log("Async task is completed");
  //   resolve();
  // },1000);
  // })

  // promiseOne.then(()=>{     // Consuming Promise
  // console.log('Promise consumed');
  // })


//👀🙇‍♂️👀  Another way 

// new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log("Async task 2");
//     resolve();
//   },1000)

// }).then(()=>{
//   console.log('promise 2 consumed');
// })


// const promiseThree = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve({user:"Tushar", email:"demo@.com"});
   
//   },1000);
// })

// promiseThree.then((obj)=>{
//   console.log(obj);
// })

// const promiseFour = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve({user:"Tushar", email:"demo@.com"});
   
//   },1000);
// })

// promiseFour.then((obj)=>{
//   console.log(obj);
// })


// const promiseFive = new Promise((resolve,reject)=>{
//  setTimeout(()=>{
//     let error = false;
//     if (!error) {
//       resolve({user:"Tushar"});
//     }
//     else {
//       reject('Error:Something went wrong');
//     }
//  },1000);

// })

// async function consumePromiseFive(){
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumePromiseFive();




async function getAllUsers(){
  try {
    const response = await  fetch("https://jsonplaceholder.typicode.com/users");
    const data =   await response.json();
    console.log(data);
    console.log("hey testing");
    
  } catch (error) {
      console.log("E: ",error);
  }
}
getAllUsers();

async function demo(a,b){
  return a+b;
}
 async function main(){
  let  sum = await demo(1,2);
console.log(sum);
 }
 main();

