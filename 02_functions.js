// rest operator

function calculateCartPrice(val1, val2, ...num1){
    return num1;
}
 
// console.log(calculateCartPrice(200, 400, 500, 2000, 50));


// Following one is an example of 'Object declaration'
const user = {
    username: "Hitesh", 
    price: 199
}

function handleObject(anyobject){
    console.log(`{Username is $anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user);
handleObject({
    username: "sam", 
    price: 400
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));