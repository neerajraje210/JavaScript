const myNums=[1,2,3]

// const myTotal = myNums.reduce( function (acc,currentvalue) {
//     console.log(`acc: ${acc} and  currentvalue: ${currentvalue}`);
//     return acc + currentvalue
// }, 3)


const myTotal= myNums.reduce((acc,currentvalue) => acc+currentvalue ,3)
console.log(myTotal);


const shoppingCart = [
    {
        itemName:"JS course",
        price: 2999
    },
    {
        itemName:"python",
        price: 999
    },
    {
        itemName:"android Dev",
        price: 15000,

    },
    {
        itemName:"Data Science",
        price: 9999,
    }
]

const pricetoPay= shoppingCart.reduce((acc, item)=> acc + item.price,0)

console.log(pricetoPay);