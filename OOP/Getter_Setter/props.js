function User (email,password){
     this._email = email;
     this._password = password;
    Object.defineProperty(this,'email',{
        get: function (){ return this._email.toUpperCase()},
        set : function (val){
             this._email = val;
        }

    })
}

const ob = new User("tm@gmail.com",3003);
console.log(ob.email);