
// const temp = 70

// if(temp < 50){
// console.log("less than 50");

// }
// else{
//     console.log("greater than 50");
// }


// const bal= 55500
// if (bal >500) console.log("test");


// if (bal<500) {
//    console.log("less than");
// }
// else if (bal <750){
//     console.log("Less than 750");
// }
// else if (bal <900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

const userloggedin = true;
const debitcard = true;
const logfromgoogle = false;
const logfromemail = true;

if (userloggedin&& debitcard){
    console.log("allow to buy course");
}

if(logfromemail|| logfromgoogle){
    console.log("User log in");
}