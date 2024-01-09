// premitive dataTypes
// 7 Types:
// String, Number, Boolean, Null, Undefined, Symbol, BigInt

// interview Question is javaScript Dynamically typed language or Statically typed language
// Javascript has dynamically typed language

const score = 100
const val = 100.6

const islog = false
const temp = null
let user ;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id===anotherid)

const bigNumbers = 36565655566544546464n  //bigInt

// *Reference Datatypes (Non-premetives)
// Array, Objects, Functions

const heros = ["Raj","Alex","adi"];
let myObj ={

    name: "neeraj",
    age: 24,
}

const myFunction = function(){
    console.log("hello world");
}


console.log(typeof myFunction)