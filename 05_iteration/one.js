// for loop 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element===5){
        console.log("5 is the best number");
    }
    console.log(element);
    
}

// console.log(element);

for (let i = 1; i <=1 ; i++) {

    console.log(`outer loop ${i}`);
    for (let j = 1; j <= 10 ; j++) {
        // console.log(`inner loop ${j} and inner loop ${i}`);
        console.log(5 + '*' + j + '=' + 5*j);
        
    }
    
    
}

let myArray =["flash","batman","Spiderman"]

console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}


for (let index = 1; index <= 20; index++) {
    if (index==5) {

        console.log(`detected 5`);
        break
        
    }
    console.log(`value of i is ${index}`);

    
}

console.log(`------------------------------------------`);

for (let index = 1; index <= 20; index++) {
    if (index==5) {

        console.log(`detected 5`);
        continue
        
    }
    console.log(`value of i is ${index}`);

    
}

console.log(`loop ends`);