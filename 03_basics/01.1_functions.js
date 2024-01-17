
function  calculateCartPrice(val1,val2,...num1){

    return num1

}

console.log(calculateCartPrice(222,500,600,500));

const user ={
    userName :"Headphones",
    price : 199
}

function handleObject(anyObject){

    console.log(`User name is ${anyObject.userName} and price is ${anyObject.price}`);

}

// handleObject(user)

handleObject({
    userName: "Sam",
    price:399
})

const myNewArr = [200,40,6000,500]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(myNewArr));

console.log(returnSecondValue([200,400,500,1000]));