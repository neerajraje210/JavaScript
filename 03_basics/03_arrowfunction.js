const user = {
    username: "Neeraj",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);

        console.log(this);
    }
}


// user.welcomeMessage()

// user.username="Lucky"

// user.welcomeMessage()

console.log(this);

// function chai(){
//     let username = "Neeraj"

//     console.log(this.username)
// }

// chai()

// *****************************************************************
// const chai = function(){
//     let username = "Neeraj"
//     console.log(this.username)
// }

const chai = () => {
    let username = "neeraj"
    console.log(this);
}

// chai()

// const addtwo = (num1 , num2) => {
//     return num1+num2
// }

// const addtwo = (num1 , num2) => num1 +num2


const addtwo = (num1 , num2) => (num1 +num2)


const addt = (num1 , num2) => ({username: "Neeraj"})
console.log(addt(5,6))


