
class User {
    constructor(username, email,password){
        this.username=username
        this.email=email
        this.password=password
    }

    encryptpassword(){
        return `${this.password} ACB `
    }

    changeUserName(){
        return`${this.username.toUpperCase()}`
    }
}

const chai = new User("Neeraj","neerajraje@gmail.com","123")

console.log(chai.encryptpassword())
console.log(chai.changeUserName());


// behind the scene

function User(username, email,password){
    this.username=username
    this.email=email
    this.password=password
}

User.prototype.encryptpassword = function(){
    return`${this.username.toUpperCase()}`
}

const Tea = new User("Tea","neerajraje@gmail.com","123")

console.log(Tea.encryptpassword())