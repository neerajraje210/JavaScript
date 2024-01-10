//Stack memory (primitive)

//heap-Memory(Non-primitive)

let myName = "NeerajRaje"

let anothherName= myName;
anothherName = "code with neeraj"

console.log(anothherName);
console.log(myName);


let user = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let user2 = user

console.table(user);
console.log(user2);

user2.email="neeraj@gmail.com"
console.log(user.email);
console.log(user2.email);