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