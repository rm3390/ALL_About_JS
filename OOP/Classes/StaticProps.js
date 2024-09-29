class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }
  static createId(){   // 🚨👀🙇‍♂️ Static Keyword restrict the access of this function(Even in Inheritance !!).
        return `123`;
    }
}

// const tm = new User("Tushar");
// console.log(tm.createId());


class Teacher extends User {
    constructor(username,email){
        super(username);
         this.email= email;
    }
}

const val1 = new Teacher("demo","demo@gmail.com");
val1.logMe()