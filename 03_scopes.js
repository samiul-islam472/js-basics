let a = 10;
const b = 20;
var c = 30;

if(true){
    let a = 300;
    const b = 200;
    console.log("INNER: ", a);
}

console.log(a);
console.log(b);
console.log(c);