//for of loop 

const arr = [1,2,3,5,6,9,7]

for (const num of arr) {
    console.log(num);
}


const greetings = "hello world"
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
}

// Maps 


const map = new Map()
map.set('IN',"India")
map.set('USA',"United State of America")
map.set('Fr',"France")
map.set('IN',"India")

console.log(map);


for (const [key, values] of map) {
    console.log(key,':-',values);
}

const myObj = {
    game1:'NFS',
    game2:'Spiderman'
}

for (const [key , value] of myObj) {

    console.log(key,':-',value);
    
}