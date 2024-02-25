const heros = ["thor","ironman","spiderman"];
const dc = ["superman", "flash", "batman"]
heros.push(dc)

console.log(heros)
console.log(heros[3][2])


const all = heros.concat(dc)

console.log(all)

const all_new =[...heros,...dc]

console.log(all_new)


const arr2 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real = arr2.flat(Infinity)

console.log(real);

console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))
console.log(Array.from({name: "hitesh"}))   //interesting 

let score = 100
let score1 = 200
let score2 = 300

console.log(Array.of(score,score1,score2));