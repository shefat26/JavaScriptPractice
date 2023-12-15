


/*
                                      Topic

 1) Store Multiple Values with Arrays

 2) Nested Array / Multidimentional array

 3) Access array data with index

 4) Manipulate Arrays with push()

 5)

 6)

 7)

 8)

 



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

console.log(removedArr);






















