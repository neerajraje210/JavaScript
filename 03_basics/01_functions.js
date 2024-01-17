
function sayMyName(){
    console.log("N");
    console.log("E");
    console.log("E");
    console.log("R");
    console.log("A");
    console.log("J");
}

sayMyName()


function addTwoNumbers(number1,number2){
  
    console.log(number1+number2);

}

function addTwoNumbers(number1,number2){
  
    // let result = number1+number2
    
    // return result
    return number1+number2
}
const result = addTwoNumbers(5,6)

// console.log("result", result);

function loginUserMessage(Username = "Sam"){
    if(!Username){
    console.log("please enter a user name")
    return
    }
    return `${Username} just logged in `
}

// console.log(loginUserMessage("Neeraj"));

console.log(loginUserMessage());