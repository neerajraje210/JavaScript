// Singleton 

//Object Literals
const mySym = Symbol("key1")
const JsUser = {
    name: "Neeraj",
    "full name": "Neeraj Raje",
    [mySym]: "mykey1",
    age: 22,
    location : "jaipur",
    email:"neeraj@gmail.com",
    isLoggedIn:false,
    lastlogin: ["monday","saturday"]
}

// 


console.log(JsUser.email)

console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])


JsUser.email="neeraj@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email=("neeraj@microsoft.com")
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS User")
}

console.log(JsUser.greeting);

JsUser.greetingtwo = function(){
    console.log(`hello JS User, ${this.name}`)
}

console.log(JsUser.greetingtwo()); 