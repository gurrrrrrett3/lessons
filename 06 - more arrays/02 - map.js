//Map is kind of like a for loop, but it returns a new array.

let numbers = [1, 2, 3, 4, 5];

let doubledNumbers = numbers.map((number) => number * 2);

//map runs the function on each element of the array, 
//and makes a new array with the results.

console.log(doubledNumbers); // [2, 4, 6, 8, 10]