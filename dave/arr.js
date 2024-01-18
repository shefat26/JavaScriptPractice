
/*
  push() 
  unshift()
  pop()
  shift()
  splice()

  includes()


 1 slice()

 2 reverse() 

 3 join()

 4 The concat() method

 5 reverse()

 6  split()

 7  concat()

*/
// Arrays


 const myArr = ["dave", 45, 33, true, false, 5, "Work", "house"];

 console.log(myArr)
 console.log(myArr[3]);
 console.log(myArr[myArr.length-1]);
 console.log(myArr.length)

 // add element at the end of the Array using push()
 myArr.push("school", 20);
 console.log(myArr);

 // add element at the begining of the Array using unshift()
 myArr.unshift(77)
 console.log(myArr) 


 //Remove last element from Arr using pop()
 myArr.pop();
 console.log(myArr);

 //Remove first element from Arr using  shift()
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




// Naveen array practice


// 1. splice()


let animals = ["dog", "cat", "bird", "fish"]

// add "Linon" at index 1 & remove 0 element 
animals.splice(1,0,"Lion")
console.log(animals)


animals.splice(3,1,"Zebra")
console.log(animals)


animals.splice(5,0,"PIG")
console.log(animals)


animals.splice(3,2,"Dog")
console.log(animals)



// slice()
//

let num = [1,2,3,4,5,6]

// here it will start to slice the array from index[1] and stop at index[3], index[4] will be excluded
let newNum = num.slice(1,4);

console.log(newNum);

// 
function sliceOut(a){

    return a.slice(1,4);

}

console.log(sliceOut(num));


// concat()


let fruit = ["apple", "banana", "orange"];
let num1 = [1,2,3,4];

// let mix = fruit.concat(num1);
// console.log(nix)


function mix(a,b){

   let mix = a.concat(b);

   return mix
}

console.log(mix(fruit, num1));



// indexOf()

let color = ["red", "green", "blue", "yellow", "red", "orange"]

let newColor = color.indexOf("blue");

console.log(newColor);

// THIS index will give us -1  because we don't have the data "naveen" in the array
let findName = color.indexOf("naveen");
console.log(findName);



// Find the second red index num

//let second = color.indexOf("red", 1);

//this line will iterate through the array to find the duplicate data "red"
/* "color.indexOf("red")+1" this means first find the first "red" index
 then find the second or third red index 
  */
let second = color.indexOf("red", color.indexOf("red")+1);
console.log(second);







// includes()

/* in this scenario inludes() will check the data is included or not,
 And it will return "true" or "false"  

*/
let test = ["admin", "customer", "seller", "vendor"];

let flag = test.includes("seller");

console.log(flag);

//with multiple str data check
let flag1 = test.includes("seller", "customer");
console.log(flag1);


// check with unknown data 
let flag2 = test.includes("Name");
console.log(flag2);









// forEach()

let n = [1,2,3,4,5,6,7];

 n.forEach((e)=> {

  console.log(e)
   
  //return e ;

 })
 



// map()

 let numbers = [1,2,3];

 let doubleNumbers = numbers.map((e) => e * 2);
 console.log(doubleNumbers);



// F -> C
//(F-32) * (5/9)

let fahTem = [32,68,86,104,212];

function fahToCel(fah){

  return (fah - 32) * (5/9);

}

let celTemp = fahTem.map(fahToCel);
console.log(celTemp);
















