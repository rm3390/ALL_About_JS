// 🙇‍♂️🙇‍♂️🙇‍♂️  this(Keyword) is used for current context.


const user={
    userName:"TM",
    price:9999,
    welcomeMessage:function() {
        console.log(`${this.userName},Welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage();
// user.userName="RM"
// user.welcomeMessage();
// console.log(this);


// 🙇‍♂️👀🚨 (this) is not for function/arrow function (Only for Object)

// const arrow = ()=>{
//   let userName="RM"
//   console.log(this);
// }
// arrow();


// const addTwo= (n1,n2)=>{
//   return n1+n2;
// }

// console.log(addTwo(3,2));


// 👀👀🙇‍♂️ Implicit return arrow function.(No need to write return )

const addTwo= (n1,n2)=> (n1+n2);
console.log(addTwo(3,2));

