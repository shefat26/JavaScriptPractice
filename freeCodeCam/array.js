


/*
                                      Topic

 1) Store Multiple Values with Arrays

 2) Nested Array / Multidimentional array

 3) Access array data with index

 4) Manipulate Arrays with .push(), .pop(),  .shift(),  .unshift()

 5) Shopping List  Nested  array/ multidimentional Array



 6) Manipulate Arrays with splice()  by Naveen

 7) Manipulate Arrays with concat()   by Naveen

 8) Manipulate Arrays with indexOf() by Naveen

 9) // Manipulate Arrays with includes() by Naveen

 10) 
 



*/





// 1) Store Multiple Values with Arrays


 var ourArray = ["John", 23];

console.log(ourArray);





// 2) Nested Array / Multidimentional array


var ourArray = [["the universe", 42, 55], "ALACE",235, ["everything", 1001]]

console.log(ourArray[0][2])
console.log(ourArray[1][3])
console.log(ourArray[3][0])
console.log(ourArray[3][1])
console.log(ourArray[2])








// 3) Access array data with index


var anArray = [50, 60, 70, 8]

console.log(anArray[1]);
console.log(anArray[0]);
console.log(anArray[3]);






// Modify Array Data with Index


var myArray = [20,64,99,33]
console.log(myArray);

myArray[0] = 85;
console.log(myArray)


console.log("\n", "\n###########################\n")






// 4) Manipulate Arrays with push()



var anArray = ["John", "jay", "cat"];
console.log(anArray);


anArray.push("Ron", "Joy");
console.log(anArray);


var anArray = [["James", 23], ["Dog", 3]];
console.log(anArray)

anArray.push(["bird",1])
console.log(anArray, "\n\n");







// Manipulate Arrays with pop()


var newArr = [1,2,3,4]
console.log(newArr)

var removedArr = newArr.pop()

console.log(newArr);
console.log(removedArr,"\n");





// Manipulate Arrays with shift()

var otherArr = ["stimpson", "J", ["cat"]];
console.log(otherArr);

var removedArr = otherArr.shift();
console.log(otherArr);

console.log(removedArr, "\n");



var onArr = [["John",23], ["dog",3], ["Bird", 1]];
console.log(onArr);

var removedArr = onArr.shift()
console.log(onArr);

console.log(removedArr, "\n");







// Manipulate Arrays with shift()


var anArr = ["James", "Jony", "Paul"]
console.log(anArr)

var addedArr = anArr.unshift("Harry")
console.log(anArr)

var anArr = ["Raymon", 43, "Hasib"]
console.log(anArr)

var addArr = anArr.unshift(56)
console.log(anArr, "\n\n")





// Manipulate Arrays with splice()





//  Shopping List  Nested  array/ multidimentional Array




var aList = [["cereal",3], ["milk", 2], ["juice", 2], ["eggs", 12], 53, "bags" ];

console.log("Main List:- ",aList);

var removeItem = aList.pop()
console.log("poped List",aList);

var shift = aList.shift();
console.log("shifted List", aList);


var unShift = aList.unshift(["Bananas", 8]);
console.log("unshifted List", aList);


var push = aList.push("Mango", "Orange")
console.log(aList);

console.log("\n######## freeCodeCam######### code is done here")
console.log("\n######## freeCodeCam######### code is done here")
console.log("\n######## freeCodeCam######### code is done here")
console.log("\n######## freeCodeCam######### code is done here\n\n")






//Manipulate Arrays with splice()    by Naveen


var animals = ["dog", "cat", "bird","horse","cow","bird","pig","fish", "Tiger", "Deer"];

console.log(animals)


animals.splice(1,1,"Bear");      // here at indx-1 removing 1 element and adding "Bear" at that place.
console.log(animals);

// here at from index-2 removing 3 element and adding "Lion","Zebra" at that place.
var addedAnimal = animals.splice(2,3,"Lion","Zebra")
console.log("\n",animals,"\n")






//Manipulate Arrays with slice()    by Naveen
// in slice() we can slice out a new array with index[] number .


let word = ["work", "very", "hard", "on", "your", "self"]

// Here we are slicing out a new array from indx [1] to indx[3] . index 4 will be excluded.
let newWord = word.slice(1,4);
console.log(newWord);



let mix = ["bird", "dog", "hippo", 22, 105, "Elephent", "Tiger", "Lion"];


// Here we are slicing out a new array from indx [2] to indx[5] . index [5] will be excluded.
let newMix = mix.slice(2,6);
console.log(newMix);

// Here we are slicing out a new array from indx [0] to indx[3] . index [3] will be excluded.
let aMix = newMix.slice(0,3);
console.log(aMix,"\n"); //output 







//Manipulate Arrays with concat()    by Naveen


let frt =[ "apple", "banana", "orange"]

let num = [1,2,3,4];


// so here frt [] will concat/ mix with num [], an will create a new arr
let mixArr = frt.concat(num)
console.log(mixArr);



//
let car = ["Dodge", "Jeep", "Toyota"]

let truck = ["F-150","Semi-truck","Tructor"];

let mixCar = truck.concat(car);
console.log(mixCar, "\n");











//Manipulate Arrays with indexOf() by Naveen

/* indexOf() will find the index number of the array element, if the
  element is not in the array we will receive " -1 "  .

*/


let color = ["red", "orange", "Green", "Blue", "Purple"]


let indxCol = color.indexOf("Green"); 
console.log(indxCol)// output: 2

let indxCol1 = color.indexOf("Purple"); 
console.log(indxCol1)// output: 4



//we don't have the color "white" in the color = [], so the output is -1
let indxCol2 = color.indexOf("white")

console.log(indxCol2) // output:  -1  




//If we have the duplicate array element in single array find the indx number


let carElement = ["sedan", "suv","Truck","Bus","Train", "suv", "Plain"]

// we are saying here look  for arr element "suv" from [2] index, "3" is our [2] index
let mixEle = carElement.indexOf("suv", 3);
console.log(mixEle);





//
let food = ["sandwich","Burger", "wings", "Bread", "sandwich", "cheese"]


// we are saying here look for arr element "sandwich", if we have more than one
// This is the ideal way to look for an element that is twice or more
let mixFood = food.indexOf("sandwich", food.indexOf("sandwich")+1);
console.log(mixFood,"\n\n");













// Manipulate Arrays with includes() by Naveen

/*
 includes() will return "true" or "false". we will use this method to check
 if we have the element in the array or not. If we don't have the element
 in the array it will return "false"

*/



let test = ["admin", "customer","seller", "vendor"];


//This test will return "true", we have the element in the array
let checkTest = test.includes("seller");
console.log(checkTest);


//This test will return "false", because we plugged element that is not in the array
let checkTest2 = test.includes("Buyer");
console.log(checkTest2);









let guest = ["customer", "Teacher","doctors", "nurse", "patient",  ]


//
let checkGuest = guest.includes("customer", "doctor");
console.log(checkGuest);

//
let checkGuest1 = guest.includes("Businessman", "Politician");
console.log(checkGuest1);



//if the first element match with arr element it will return "true"
let checkGuest2 = guest.includes("Teacher", "student" );
console.log(checkGuest2);


//if the first element doesn't match with arr element it will return "false"
let checkGuest3 = guest.includes( "driver", "customer");
console.log(checkGuest3);



console.log("\n#####################\n")






























