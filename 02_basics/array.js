const myArr = [1,2,3,4,5,6];
const myHeros =["alex","joe","bablu"]

const arr = new Array(1,2,3,4,5)
console.log(myHeros[2]);

//array methos

myArr.push(7)
myArr.push("harry")
myArr.pop()

myArr.unshift(9)

myArr.shift()

console.log(myArr.includes(9))
console.log(myArr)
console.log(myArr.indexOf(8));

const newArr = myArr.join();

console.log(myArr);
console.log(newArr);

// Slice,  Splice

// console.log("a", myArr);
 const myn1=myArr.slice(1,3)
// console.log(myn1)

//  console.log("b  ",myArr);

 const myn2=myArr.splice(1,3)
 console.log(myn1)
 console.log(myn2)
