//There are a few different ways to create functions.

//1. Function declaration

function sayHello() {
    console.log("Hello");
}

//2. Arrow function

let sayGoodbye = () => {
    console.log("Goodbye");
}

//there are a few other ways, but these two are the most common.

//Let's recreate the multiply function from the previous snippet:

let multiply = (number1, number2) => number1 * number2;

console.log(multiply(2, 3)); // 6
console.log(multiply(4, 5)); // 20