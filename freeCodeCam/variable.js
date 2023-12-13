

/*
                         Topic

 1) Data Type And Variable

 2)Declare Variables

 3) Storing Values with the Assignment Operator

 4) Initializing AND Un-Initializing Variables with Assignment Operator

 5) Basic Math  (Add, Subtract, Multiply, Division)

 6) Incrementing and Decrementing  numbers

 7) Decimal Numbers (float or floating number)

 8) Finding a Remainder  (even or odd number)

 9) Compound Assignment with Augmented (Plus Equal += operator, 
     Minus Equal -= , Multiply Equal *= , dividev Equal /= operator)



*/





// Data type and Variables

/*
Undefined, null, boolean, string, symbol, number, object

Undefined ==> is something that has not been defined

null ==> is nothing, when we set some value to be nothing.

boolean  ==> is True  or False

string   ==> string we declare inside the single quotation mark ' '

number  ==> is   number like  9,  1, 4   etc

object ==> object can store lot of different key value data

*/



var myName = "james";

 //console.log(myName)

myName = "watson"
console.log(myName)


let newName = "rony"
//console.log(newName)

newName = "hyder"
console.log(newName)


const aNum = 25
console.log(aNum)

//aName = "Shen"




// Storing Value with the Assignment Operator


var a = 7;
var b = 2;

console.log( a);

a = b              // here we assigne variable  "b" value into "a"
console.log(a)






// Initializing Variables with Assignment Operator


var a = 7;
console.log(a);


// Un-initialized variables


 var c;
 var d;
 var e;

console.log(c)
console.log(d)
console.log(e)
//we havn't declare any variable value here. expected output will be "undefined"

// Initializing Variables

 var c = 9;
 var d = 8;
 var e = "A string";

console.log(c)
console.log(d)
console.log(e)





// Case Sensitivity in Variables=> first letter of the variable has to be small letter

 var newNumberIs = 20;

 


// Basic Math 

// Adding number

var sum = 10 +1;
console.log(sum)

var a = 10;
var b = 15;
var add = a+b;
console.log(add)





// subtracting numbers

var difference = 45 - 15;
console.log(difference)

var a = 25;
var b = 10;
var subtract = a-b;
console.log(subtract);




// Multiply

var multiplication = 4 * 15;
console.log(multiplication)

var a = 5;
var b = 9;
var Multiply = a*b;
console.log(Multiply);




// Division

var division = 12 / 3;
console.log(division)

var a =60;
var b = 5;
var quatient = a/b;
console.log(quatient);



// Incrementing Numbers


var myNum = 86;

// One way to increment numbers
myNum = myNum +1
console.log(myNum)




var myNum = 98;

//Second way to increment numbers
myNum ++ ;
console.log(myNum);




// Decrementing numbers


var newNum = 35;

// One way to decrement numbers
newNum = newNum -1
console.log(newNum)




var newNum = 14;

//Second way to decrement numbers
newNum -- ;
console.log(newNum);







// Decimal Numbers  (float or floating number)




// Adding Decimal number

var sum = 10.5 + 1;
console.log(sum)

var a = 12.5;
var b = 15;
var add = a+b;
console.log(add)





// subtracting Decimal numbers

var difference = 45 - 1.8;
console.log(difference)

var a = 10.5;
var b = 1.0;
var subtract = a-b;
console.log(subtract);




// Multiply Decimal numbers

var multiplication = 4 * 15.4;
console.log(multiplication)

var a = 5.5;
var b = 9;
var Multiply = a*b;
console.log(Multiply);




// Dividing Decimal numbers

var division = 12 / 3.4;
console.log(division)

var a =60.56;
var b = 5;
var quatient = a/b;
console.log(quatient);






// Finding a Remainder

/* 
 A remainder is what is left after a divide. for example,  11 % 3 
 after dividing 11 by 3 , there will be 2 left. so here "2" is remainder

 =>NOTE, if there is a remainder left then it's an odd number, if there
         is no remainder left then it's an odd number
*/ 



var remainder;

remainder = 11 % 3;
console.log(remainder);

var a = 15;
var b = 4

var remainder = a % b;
console.log(remainder);




// Compound Assignment with Augmented Adition


var a = 3;
var b = 15;
var c = 22;

a = a + 12;
b = b + 5;
c = c + 7;

console.log(a)
console.log(b)
console.log(c)

// we can do the same thing using Plus Equal += operator


var a = 3;
var b = 10;

a +=  1;
b +=  5;


console.log(a)
console.log(b)








// Compound Assignment with Augmented subtraction

var a = 13;
var b = 15;
var c = 22;

a = a - 2;
b = b - 5;
c = c - 7;

console.log(a)
console.log(b)
console.log(c)

// using Minus Equal -= operator


var a = 3;
var b = 10;

a -=  1;
b -=  5;


console.log(a)
console.log(b)





// Compound Assignment with Augmented Multiplication

var a = 13;
var b = 15;
var c = 22;

a = a * 2;
b = b * 5;
c = c * 7;

console.log(a);
console.log(b);
console.log(c);

// using multiply Equal *= operator


var a = 3;
var b = 10;

a *=  1;
b *=  2;


console.log(a);
console.log(b);






// Compound Assignment with Augmented Multiplication

var a = 12;
var b = 15;
var c = 22;

a = a / 2;
b = b / 5;
c = c / 8;

console.log(a);
console.log(b);
console.log(c);



// using dividev Equal /= operator

var a = 3;
var b = 10;

a /=  1;
b /=  2;


console.log(a);
console.log(b);
