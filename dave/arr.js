
/*

 1 slice()

 2 reverse() 

 3 join()

*/
// Arrays


 const myArr = ["dave", 45, 33, true, false, 5, "Work", "house"];

 console.log(myArr)
 console.log(myArr[3]);
 console.log(myArr[myArr.length-1]);
 console.log(myArr.length)

 // add element at the end of the Array
 myArr.push("school", 20);
 console.log(myArr);

 // add element at the begining of the Array
 myArr.unshift(77)
 console.log(myArr) 


 //Remove last element from Arr
 myArr.pop();
 console.log(myArr);

 //Remove first element from Arr
 myArr.shift();
 console.log(myArr);

// deleting and 


//


let myArray = ["A", "B", "C", "D", "E","F"];

console.log(myArr);


// slice() will slice out the array from the given index num
 let newArr = myArray.slice(2) // Expected output[C,D,E,F]
 console.log(newArr);

// it will slice the array from index[1] to [3], INDEX[4] will not be included
 let newArr1 = myArray.slice(1,4)  // Expected output[B,C,D]
 console.log(newArr1);




 // reverse() , it will reverse the myArray = []

 //myArray.reverse();
 //console.log(myArray);




//


let myArray1 = ["A", "B", "C", "D", "E","F"];

// join() , it will return new string separated by coma

let newStr = myArray.join()
console.log(newStr);



//The split() method is a string method that creates a new array
// it will split the "newStr" string in to individual string.

let aStr = newStr.split(",")
console.log(aStr);





// The concat() method
// the concat method joined two different into one Array

let myArrayA = ["1", "2", "3", "4"];

let myArrayB = ["E","F","G","H"];

//let newArray = myArrayA.concat(myArrayB);


// We can also use spread operator for concatination.
let newArray = [...myArrayA, ...myArrayB];

console.log(newArray);





// Nested Array/ Multidimentional Array













































