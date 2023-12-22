

/*

 Declaring Function in 9 ways

 1) function

 2)  Function Expression :  Annoynomus Function

 3) Arrow Function 

 4) Function Constructor 

 5) IIFE( Immediately Invoked Function Expression):

 6) Generator Function (function* and yield keyword)

 7) Annoynomus function

 8) Recursive function 

 9. Higher-Order Function()



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







console.log("\n######### Recursive function ##########")
console.log("########### Recursive function ##########\n")





//8) Recursive function 
// this function will call itself during the execution


function factorial(n){

    if(n === 0 || n ===1){

        return 1;

    }
    else{

    //HERE (n-1) means decreasing n, (4-1)=>3, (3-1)=>2,(2-1)=>1,(1-1)=>0
    //factorial of 4 :-  4*3*2*1 = 24
        return n*factorial(n-1);

    }

}



// factorial of 4 :-  4*3*2*1 = 24
let aFactorial = factorial(4)

console.log(aFactorial)

console.log(factorial(5)) // factorial of 5:-  5*4*3*2*1 = 120







console.log("\n######### Higher-Order function ##########")
console.log("########### Higher-Order function ##########\n")



// 9. Higher-Order Function()
// it means whwn a function takes one or more argument as a function()


// Example:-1 
 function add(a, b){

    return a + b ;

 }

 function operate(myFunct, a, b){

    return myFunct(a, b);

 }

 let s = operate(add, 4, 5);

 console.log(s);



// Example:-2
 function multiplication(a, b){

    return a * b ;

 }

 function operate(myFunct, a, b){

    return myFunct(a, b);

 }

 let x = operate(multiplication, 3, 5);

 console.log(x);







