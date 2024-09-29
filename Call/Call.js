function SetUsername(username){
   this.username = username;
}

function createUsername(username,email,password)
{
    SetUsername.call(this,username);
     
    this.email = email;
    this.password = password;
  
}

const val = new createUsername("Tm","tm@gmail.com","123");

console.log(val);
