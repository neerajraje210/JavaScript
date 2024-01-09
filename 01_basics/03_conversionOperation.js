let score = "Neeraj"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "354" => 354 converts to number 
//"352ahs" => NaN (not a number )
// true => converts to 1;
//false => converts to 0;

let isloggedIn = "Neeraj"

let booleanIsLoggedIn = Boolean(isloggedIn)
console.log(booleanIsLoggedIn);

//if we write 1 it is converted to True=>  1 =>true 
// if we write 0 then it is converted to False =>  0=> false
//if empty " " then it is converted to => false  
//if we write "name" then it is converted to => True


let someNumber = 35;

let stringNumber = String(someNumber)


console.log(stringNumber);
 console.log(typeof stringNumber)


// **********************************operations********************************

let val = 3
let negval = -val
console.log(negval);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/3);
console.log(2%3);

let str1 = "hello"
let str2 = " Neeraj"
let str3 = str1+str2
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log(1+2+"2");


console.log(true)

let gameCounter = 100;
++gameCounter;
console.log(gameCounter)