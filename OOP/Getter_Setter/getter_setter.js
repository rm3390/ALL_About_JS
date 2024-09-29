class User {
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return `${this._password} Tushar`
    }
    set password(val){
     this._password = val;
    }
}

const tm = new User("tm@gmail.com","123");
console.log(tm.password);