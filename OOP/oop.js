// const user ={
//    userName:"TUSHAR",
//    loginCount:{
//     count1:[22,"five"],
//     count2:3
//    },
//    signedIn:true 
// }

// console.log(user.loginCount.count1[1]);


// const user ={
//     userName:"TUSHAR",
//        loginCount:{
//         count1:[22,"five"],
//         count2:3
//        },
//        signedIn:true ,
//        getUserDetails:function () {
//            console.log(`Username:${this.userName}`);
//        }
// }

// console.log(user.getUserDetails());


function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=  isLoggedIn;
    return this;
}
const userTwo= User("RM",1,false);
const userOne= User("TM",10,true);

console.log(userTwo);    // 🚨🙇‍♂️🙇‍♂️👀👀 Value will be Over rided.



// Solution For Over riding.


// function User(username,loginCount,isLoggedIn){
//     this.username=username;
//     this.loginCount=loginCount;
//     this.isLoggedIn=  isLoggedIn;
//     return this;
// }
// const userTwo= new User("RM",1,false);
// const userOne=new User("TM",10,true);

// console.log(userTwo);
// console.log(userOne);