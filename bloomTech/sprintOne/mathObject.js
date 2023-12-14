/*
                                        Topic
 
  1) Math.pow()

  2) Math.round()

  3) Math.ceil()

  4) Math.round, Math.floor,
*/




/*
Math.pow
We can use the pow method on Math to return a number raised to an exponent. It will take two numbers.
 The first is the base and the second is the power. For example, Math.pow(5,2) calculates 5 squared, 
 which is 25. See some more examples below:

*/


Math.pow(2,2) // returns 4
console.log(Math.pow(2,2))

Math.pow(3,2) // returns 9
console.log(Math.pow(3,2))

Math.pow(3,3) // returns 27
console.log(Math.pow(3,3))



/*
 Math.round, Math.floor, Math.ceil
Math also has methods that will round numbers for us.
.round will round a number to the nearest whole number.  
 .floor will always round a number down to the nearest whole number.
.ceil will always round up to the nearest whole number.
*/
console.log(Math.round(6.5) ) // return 7
console.log(Math.round(6.45)) // return 6
console.log(Math.floor(6.999)) // return
console.log(Math.ceil(6.0001)) // return



/* 
 The "triple equals" sign ( === ) must not be confused with a single 
 equal sign (which indicates assigning a value to a variable). The 
 triple equal will compare everything about the two items, including 
 type, and return if they are precisely equal or not.

(Something to note: there is also a "double equals" ( == ) sign which
 will compare two items, but it allows type coercion so a string and 
 an integer can be considered equal (1 == '1' // true). Due to this, 
 it is considered bad practice to use the double equal sign. We would
  like to see you always using the triple equal sign, and you will 
  always see us using it.)

*/


1 === 1;          // true
1 === '1';        // false
'cat' === 'cat';  // true
'cat' === 'Cat';  // false



/*
 The last logical operator is the "NOT" operator. It is written as a 
 single exclamation mark (!). We saw this operator earlier when 
 determining equality (!==). As before, the NOT operator will return 
 the opposite Boolean value of what is passed to it.

 In this first case, since the opposite of false is true, (!false) 
 would return true.


*/


(!false) // true

//Similarly since 1 is equal to 1 and this statement is true, !(1===1) would return false thanks to the ! operator.


(!(1 === 1)) // false



