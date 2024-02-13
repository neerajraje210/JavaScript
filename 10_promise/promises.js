const promiseone = new Promise((reolve,reject)=>{
    //Do an async task
    //DB call, cryptography,network

    setTimeout(function(){
        console.log('async task is complete');
        reolve()
    },1000)
})


promiseone.then(()=>{
    console.log("promise consume");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)

}).then(function () {
    console.log("Async 2 resolved");
})


const promisethird = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({Username: "Neeraj", email: "neerajraje@gmail.com"})
    },1000)
})

promisethird.then((user)=>{
    console.log(user);
})


const promisefour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false
        if (!error) {
            resolve({Username:"Hardik", password: "12586"})
        }
        else{
            reject(`ERROR: Something went wrong`)
        }
    },2000)
})

promisefour.then((user)=>{
    console.log(user);
    return user.Username
}).then((Username)=>{
    console.log(Username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("the promise is ethier resolved or Rejected ");
})



const promisefive = new Promise((resolve,rejected)=>{

    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({Username:"Raj", passs:"5688"})
        }
        else{
            reject('ERROR: Raj went wrong')
        }
    },1000)

})

async function consumePromiseFive() {
    try {
        const response = await promisefive
        console.log(response);
    } catch (error) {
        console.log(error);
    }

}

consumePromiseFive()


async function getallUser(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")

    const data = await response.json()
    console.log(data)
    } catch (error) {
       console.log("E:", error); 
    }
}

getallUser()


fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
}) 
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})