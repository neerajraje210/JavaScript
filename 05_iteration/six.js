// const coading = ["JAVA","PYTHON",".NET","C#","WEB-DEVLOPMENT"]

// const values = coading.forEach( (item)=>{
    
//     console.log(item );
    
// })

// console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10]

// const values = myNums.filter( (num) => {
//    return num >4 
// })

const values= []

myNums.forEach((num)=>{
    if (num >4) {

        values.push(num)      
    }
})

console.log(values);


const books = [
    {title:'Book one', genre:'Fiction',publish :1902, edition: 2024},
    {title:'Book two', genre:'non Fiction',publish :1302, edition: 2024},
    {title:'Book three', genre:'history',publish :1342, edition: 2006},
    {title:'Book four', genre:'non Fiction',publish :9302, edition: 2002},
    {title:'Book five', genre:'Fiction',publish :1999, edition: 2006},
    {title:'Book six', genre:'sci-Fiction',publish :5602, edition: 2005},
]


let userbooks = books.filter( (bk) => bk.genre ==='non Fiction' )
 userbooks = books.filter((bk) =>  {
     return bk.publish >= 1900 && bk.genre === "Fiction"})

console.log(userbooks);