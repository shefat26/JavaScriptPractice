

// push()



var anArray = ["John", "jay", "cat"];
console.log(anArray);


anArray.push("Ron", "Joy");
console.log(anArray);


var anArray = [["James", 23], ["Dog", 3]];
console.log(anArray)

anArray.push(["bird",1])
console.log(anArray, "\n\n");







//  pop()


var newArr = [1,2,3,4]
console.log(newArr)

var removedArr = newArr.pop()

console.log(newArr);
console.log(removedArr,"\n");





// Arrays with shift()

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







// Arrays with shift()


var anArr = ["James", "Jony", "Paul"]
console.log(anArr)

var addedArr = anArr.unshift("Harry")
console.log(anArr)

var anArr = ["Raymon", 43, "Hasib"]
console.log(anArr)

var addArr = anArr.unshift(56)
console.log(anArr, "\n\n")




///////////////////////////////
//////////////////////////////



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




////

// splice()


var animals = ["dog", "cat", "bird","horse","cow","bird","pig","fish", "Tiger", "Deer"];

console.log(animals)


animals.splice(1,1,"Bear");      // here at indx-1 removing 1 element and adding "Bear" at that place.
console.log(animals);

// here at from index-2 removing 3 element and adding "Lion","Zebra" at that place.
var addedAnimal = animals.splice(2,3,"Lion","Zebra")
console.log("\n",animals,"\n")






////////////////////////////////
////////////////////////////////




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




////////////////////////////


let color = ["red", "orange", "Green", "Blue", "Purple"]


let indxCol = color.indexOf("Green"); 
console.log(indxCol)// output: 2

let indxCol1 = color.indexOf("Purple"); 
console.log(indxCol1)// output: 4




let indxCol2 = color.indexOf("white")

console.log(indxCol2) // output:  -1  



////////////


let carElement = ["sedan", "suv","Truck","Bus","Train", "suv", "Plain"]

let mixEle = carElement.indexOf("suv", 3);
console.log(mixEle);



//
let food = ["sandwich","Burger", "wings", "Bread", "sandwich", "cheese"]


// we are saying here look for arr element "sandwich", if we have more than one
// This is the ideal way to look for an element that is twice or more
let mixFood = food.indexOf("sandwich", food.indexOf("sandwich")+1);
console.log(mixFood,"\n\n");




