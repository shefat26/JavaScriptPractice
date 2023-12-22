

/*

 Declaring Function in 9 ways

 1) function

 2)  Function Expression :  Annoynomus Function

 3) Arrow Function 

 4) Function Constructor 

 5) IIFE( Immediately Invoked Function Expression):

 6) Generator Function (function* and yield keyword)

 7) Annoynomus function





*/



//Example:- 1
function add(a,b){

    return a+b;
}
add(5, 6)

console.log(add(5,6));


//Example:- 2
function subtract(a,b){

    return a-b;
}
add(5, 6)

console.log(subtract(8,6));




console.log("\n######### Expression Function ##########")
console.log("######### Expression Function ##########")
console.log("######### Expression Function ##########\n")



//// Function Expression :  Annoynomus Function
 let multiply = function(a,b){

    return a*b;
}
 let multi = multiply(5, 6)

console.log(multi);



console.log("\n######### Arrow Function ##########")
console.log("########### Arrow Function ##########\n")


//3) Arrow Function 
// we don't need the function name in Arrow function


let divide = ( a, b) => a/2 ;

let div = divide(20,2);
console.log(div);








console.log("\n######### Function Conctructor ##########")
console.log("########### Function Conctructor  ##########\n")


// 4) Function Constructor 
// Here last parameter will behave like function body
// before last param will be the function param
// We don't use this function that much 


let substract = new Function(" a ", " b ", " return a-b ");

let subs = substract(10 , 2);
console.log(subs);






console.log("\n######### Annoynomus function ##########")
console.log("########### Annoynomus function  ##########\n")




//  7) Annoynomus function
// this function doesn't have any specific name

let numeri = [1, 2, 3, 4, 5];

 let squarNum = numeri.map(function(e){

    return e*e;

})

console.log(squarNum)
























