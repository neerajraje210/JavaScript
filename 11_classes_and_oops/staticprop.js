class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`UserName: ${this.username}`);
    }

    createId(){
        return `123`
    }
}

const neeraj = new User("Neeraj")
console.log(neeraj.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email

    }
}

const iphone = new Teacher("iphone ","i@phone.com")

console.log(iphone.createId());