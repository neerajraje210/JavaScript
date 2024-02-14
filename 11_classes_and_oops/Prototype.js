let myName = "hitesh"
let mychannel="chai             "

console.log(myName.length);
// console.log(mychannel.trueLength());

let myheros = ["thor","spiderman"]

let heroPower ={
    thor:"Hammer",
    spiderman:"sling",


    getspiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh=function () {
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh =function(){
    console.log("hitesh says hello ");
}
// heroPower.hitesh()

myheros.hitesh()
myheros.heyHitesh()
// heroPower.heyHitesh()


const user= {
    name:'chai',
    email:"chai@gmail.com"
}

const Teacher ={
    makevideos:true
}

const TeachingSupport ={
    isAvailable: false
}

const TAsupport={
    makeAssignment: 'js Assignment',
    fullTime: true,
    __proto__:TeachingSupport

}

Teacher.__proto__= user

//modern Syntax

Object.setPrototypeOf(TeachingSupport,Teacher) 

let anotheruserName ="chaiAurcode      "

String.prototype.trueLength= function(){
    console.log(`${this}`);
   
    console.log(`True length is: ${this.trim().length}`);
}

anotheruserName.trueLength();

"hitesh".trueLength()
"icetea".trueLength()