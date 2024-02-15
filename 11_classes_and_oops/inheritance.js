class User {
    constructor (username){
        this.username=username
    }

    logMe(){
        console.log(`UserName is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password=password
    }
    addCourse(){
        console.log(`new course was added byy ${this.username}`);
    }
}

const Neeraj = new Teacher("Neeraj","neeraj@gmail.com","123")

Neeraj.addCourse()
Neeraj.logMe()

const hardik = new User("hardik")

hardik.logMe()

console.log(Neeraj instanceof User);