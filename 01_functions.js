console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // console.log("Hitesh");
    // return result;
    return number1 + number2;
}
const result = addTwoNumbers(3, 4);

// console.log("Result: ", result);
 

function loginUserMessage(username){
   if(username === undefined){
    // username === undefined & !username are equivalent statement
    // (username = "Sam") is to set default value
    console.log("Please enter a username");
    return
   }
    return `${username} just logged in`
}

console.log(loginUserMessage("Hitesh"));
console.log(loginUserMessage());