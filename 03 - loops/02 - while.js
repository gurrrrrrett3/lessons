//While loops

// While loops are used to execute a block of code as long as a condition is true.

// The while loop is structured as follows:

while (condition) {
  // code to run
}

// The while loop will run as long as the condition is true.

//So if I have

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

//The loop will run 10 times, printing 0 through 9.

//Do while loops

do {} while (condition);

//The do while loop will run the code inside the loop at least once,
//even if the condition is false.

//example

let j = 0;
do {
  console.log(j);
  j++;
} while (j > 10);

//The loop will run 1 time, printing 0 and adding 1 to j.
