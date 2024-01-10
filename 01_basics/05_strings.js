const name= "Neeraj"
const repocount = 4;

console.log(name + repocount + " value ");

console.log(`hello my name is ${name} and my repo is ${repocount}`)

const gameName = new String('Neeraj-raje')

console.log(gameName[3]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));

console.log(gameName.indexOf('r'));


const newString = gameName.substring(0,6)

console.log(newString);

const anotherString = gameName.slice(-8,6);

console.log(anotherString);

const newString1 =  "   hitesh  "

console.log(newString1);
console.log(newString1.trim());

const url = "https://google.com/google%20com"

console.log(url.replace('%20', '-'));

console.log(url.includes('niraj'))

console.log(gameName.split('-'))