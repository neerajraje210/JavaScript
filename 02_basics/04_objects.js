//const tinderUser = new Object()
const tinderUser ={}

tinderUser.id = "123abc"
tinderUser.name = "Alex"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser ={
    email:"some@gmail.com",
    fullname: {

        username: {
            firstname:"Neeraj",
            lastname:"Raje"
        }
    }
}

console.log(regularUser.fullname.username.firstname);


const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    3:"c",
    4:"d"
}

const obj4 = {
    5:"f",
    6:"e"
}
// const obj3 ={obj1, obj2}

// const obj3= Object.assign({},obj1,obj2,obj4)

const obj3= {...obj1,...obj2}
console.log(obj3);


const user = [
    {
        id: 1,
        email:"h@gmail.com"
    },

    {
       id: 2,
       email:"n@gmail.com"
    },
    {
        id: 3,
        email:"p@gmail.com"
     }
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));