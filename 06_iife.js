// Immediately Invoked Function Expressions (IIFE)


// function chai(){
//     console.log(`DB CONNECTED`);
// }();     // WILL NOT WORK

(function chai(){
    console.log(`DB CONNECTED`);
})();    // WILL WORK


( () => {
    console.log(`DB CONNECTED TWO`);
});     // WILL WORK TOO

// NOTE: To run two or more IIFE at the same time it is essential to make use of (;)semi-colon terminator after each IIFE.


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Hitesh'); 


