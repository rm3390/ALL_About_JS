class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`
    }
}
const val = new User("Tm", "tm@gmail.com", 3009);

console.log(val.username);
console.log(val.encryptPassword());