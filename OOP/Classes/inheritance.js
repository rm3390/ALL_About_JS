class User{
    constructor(username){
    this.username= username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);          // 🙇‍♂️👀🚨👀 In class declaration don't use (call() method)..
        this.email = email;
        this.password=password;
    }

    addCourse(){
        console.log(`A new course added by ${this.username}`);
    }
}
const ob1= new User("Tm");
ob1.logMe();
const ob2= new Teacher("rm","gmail.com",3390);
ob2.addCourse();
ob2.logMe()
