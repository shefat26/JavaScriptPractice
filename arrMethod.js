


// includes()
// includes() methods will return true or false 

let test = [ "admin", "customer", "seller", "vendor"];

// Checking if either of the data is present in the test arr
let flag = test.includes( "admin", "sifat");

console.log(flag);




// forEach()
/*/The forEach() method of Array instances executes a provided 
function once for each array element.*/

let n = [1, 2, 3, 4, 5, 6, 7, 8];

let nth = n.forEach((e, item,index) => {

    console.log( e * 2);

})


//

let sum = 0;

let newSum = n.forEach((e) => sum += e ) // we are adding all arr element together

console.log(sum);



let letters = ["a", "b", "c", "d", "e", "a", "b"]

//
// How many times a letter appears in an arr 


let count = {} ;


letters.forEach((e) => {

    //return  count[e] === letters ? count[e]++ : count[e] = 1  ;

    if(count[e]){

        count[e] ++

    }
    else{

        count[e] = 1 ;

    }

})

console.log(count)




// indexOf() 

/*
The indexOf() method of Array instances returns the first index at 
which a given element can be found in the array, or -1 if it is not 
present.
*/


const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

let newBeasts = beasts.indexOf("camel")

console.log(newBeasts);

console.log(beasts.indexOf("bison"));
console.log(beasts.indexOf("bison"));


















