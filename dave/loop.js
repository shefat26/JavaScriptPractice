/*
 
1. While loop
=> while loop first check for the conditions then Execute the block

2. Do While Loop
  => Do while loop first Execute the block, then Check for the conditions

*/


let myNumber = 0;

while (myNumber < 10) {
  myNumber++; // it will go up to 50th
  console.log(myNumber);

  //myNumber ++ ;          // it will go up to 49th
}

let i = 1;

while (i <= 5) {
  console.log("Hi");

  i++;
}



//reverse while loop
let j = 5;

while (j > 0) {
  console.log("Hi", j);

  j--;
}

// console.log(i)




// Do While loop

let x = 10;

do {
  console.log("time", x);
  x++;

  // because of condition it will print 10 only eventhough the condition doesn't match
} while (x <= 5);





