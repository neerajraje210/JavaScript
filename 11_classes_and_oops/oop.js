// const user = {
//     userName: "Neeraj",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//     //  console.log(`UserName : ${this.userName}`);

//     console.log(this);

//     }
// }



// console.log(user);
// console.log(user.getUserDetails());

// console.log(this);

// ------------------------Constructor Function-------------------------

// const promiseOne = new promise()
// const date  = new Date()

function User(UserName , loginCount , isLoggedIn){
    this.UserName = UserName
    this.isLoggedIn = isLoggedIn
    this.loginCount =loginCount 

   this.greeting = function(){
    console.log(`Welcome ${this.UserName}`);
   }

   return this
}

const UserOne = new User("Hitesh",12,true)
const usertwo = new User("Raj", 11,false)
console.log(UserOne.constructor);
console.log(usertwo);