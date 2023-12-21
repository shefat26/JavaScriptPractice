


/*

Array Methods 

 1)  .ma() method

 2) .filter() method

 3) .reduce() method

 4) .every() method

 5) .some()  method

 6) .FIND()  METHOD
















*/




console.log("########  .map() #######\n")



// .map() 
// .map() will alway return the new array


 let numbers =[ 1, 2, 3]

 let doubleNum = numbers.map((e) => e*2);
console.log(doubleNum);





// EXAMPLE:- 2

// Fahrenheit to Celsius using  .map()
//Forfula: (F-32)*(5/9)


let fahTem = [32,68,86,104,212];

function fahToCel(fah){

    return (fah-32)*(5/9);

}

// fahToCel()
// console.log(fahToCel())

let celTem = fahTem.map(fahToCel);
console.log(celTem)





// EXAMPLE:-3

let aNum = [1, 2, 3, 4, 5]

let newNum = aNum.map(multiply)

   function multiply(value, index, arr){

    // // 1*[0], 2*[1], 3*[2], 4*[3], 5*[4] = [0,2,6, 12,20]
    return value*index; 

}

console.log(newNum);



// EXAMPLE:-4


let product = [

    {
        name:'laptop',
        price:1000,
        count: 5
    },

    {
        name:'desktop',
        price:1500,
        count: 2
    },

    {
        name:'phone',
        price:500,
        count: 10
    }

]


// what's the total product price and count?


let totalProductValue = product.map(item => item.price*item.count);

console.log(totalProductValue);





// EXAMPLE:-5


//convert array of string to number


let str = [ '1','2', '3', '4', '5']

let strNum = str.map(Number)
console.log(strNum);




console.log("\n###################")
console.log("#####################")
console.log("#####################\n\n")
console.log("########  .filter() #######\n")







/*
// .filter
//.filter() will return the new array based on the .filter() condition

*/


// EXAMPLE:-1

// find the even number from the array using .filter()


let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let evenNum = num.filter((n)=> n % 2===0);
console.log(evenNum)





// EXAMPLE:-2

// find the odd number from the array using .filter()


let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let oddNum = num.filter((n)=> n % 3 === 0);
console.log(oddNum)






// EXAMPLE:-3

// find the similar word from the array using .filter()


let word = ["add", "subtract", "plus", "minus", "add", "plus"]

let similarWord = word.filter((n)=>{  
    
      return n.word === "add" && n.word === "plus" ;

       
});
console.log(similarWord)








//// EXAMPLE:-4 of .filter()


let word1 = ["add", "subtract", "plus", "minus", "add", "plus"]

let similarWord1 = word.filter((n)=> n === "plus");
console.log(similarWord1)





// // EXAMPLE:-5
// find the object from the array


let employee = [

    {name:"John", age:30, gender:"male"},
    {name:"Bob", age:35, gender:"male"},
    {name:"Lisa", age:40, gender:"female"},
    {name:"Priya", age:25, gender:"female"},
    {name:"Peter", age:55, gender:"male"},
    {name:"Priya Roy", age:35, gender:"female"},

];


let femaleEmpOver30 = employee.filter((emp) =>{

    return emp.gender === "female" && emp.age > 30;

})

console.log(femaleEmpOver30);




console.log("\n###################")
console.log("###################\n\n")
console.log("######### .reduce()  ##########\n")






//  .reduce() 

// .reduce() function will take two parameter (accumulator, num), 
//here here accumulator is --> accumulator + num, num param will iterate through the array
// .reduce() will return one number after accumulating the array element


// EXAMPLE:-1

// accumulate / add the array using .reduce() 

let numb = [1, 2, 3, 4, 5];

let sum = numb.reduce((accu,num)=> accu + num, 0);

// 1st --> 0+1 = 1;
// 2nd --> 1+2 = 3;
// 3rd --> 3+3 = 6;
// 1st --> 6+4 = 10;
// 1st --> 10+5 = 15;

console.log(sum);




//// EXAMPLE:-2   of  .reduce()

// find the max num from the array

let top = [ 10, 5, 25, 8, 30, 15]

let maxNum = top.reduce((max, num) =>{

    /*
    initial value 0th index will be = max param, also num will be =0th index,
    then num param will iterate through the array element
    1st max=>10 , num=>10
    2nd max=>10  , num=>5
    3rd max=>10  , num=>25
    4th max=>25  , num=>8
    5th max=>25  , num=>30
    6th max=>30  , num=>15
    */
    if(num > max){

        return num;

    }
    else{

        return max;
    }

}, top[0]) // we set the .reduce() to start from top [] arr 0th index
           // we set the initial value (max), top[0] ==> max

console.log(maxNum);







// // EXAMPLE:-3    of reduce()

/*
 let say we have a Shopping cart, and there are few items in the cart.
  also product name and the price.

  Find the total items and the total price of the cart items.
  find the total price of the items

*/


let cartItems = [

    {name: "jeans", price:500},
    {name: "shirt", price:300},
    {name: "shoes", price:1000},
    {name: "hat", price:100},
    {name: "t-shirt", price:400}
]


let totalPrice = cartItems.reduce((cost, item) => 

/*
 Here we are saying, start from 0th index, Add the 0th item price to
 "cost" param and iterate through the cartItem [] element price section only.

 //Here "cost" param will hold the all acculumated price as "item" param 
  iterate through the Array
*/
   cost + item.price, 0); // here 0th index the initial value

console.log(totalPrice);






console.log("\n###################")
console.log("###################")
console.log("###################\n\n")






console.log("########## .evry()  #########\n")



// .every()  method

// check every element in the arra pass for specific condition.
// return "True" if all the elements of the array iterable are "True"



// EXAMPLE:- 1
let len = [1, 2, 3, 4, 5];


// Here we are saying every element in the "len1" array has to be less than 10.
// if the element are not less that "10", it will return  "false"
let flag = len.every((e) => e < 10);
console.log(flag);




// Example:- 2   .every()
let len1 = [1, 2, 3, 4, 5, 15];


// Every element in the "len1" array has to be less than 10
let flag1 = len1.every((e) => e < 10);
console.log(flag1);










console.log("\n###################")
console.log("###################")
console.log("###################\n\n")



console.log("######### .some() ##########\n")



// .some()
// in .some(), condition is atleast one element passes the condition
// if the condition is true, it will return "true"
// if the condition is false, it will return "false"


let otherNum = [1, 2, 3, 4, 5, 15];

let newSome = otherNum.some((e) => e % 2 === 0);

console.log(newSome);




// EXAMPLE:- 2

let otherNum1 = [1, 2, 3, 4, 5, 15];

let newSome1 = otherNum1.some((e) => e > 20);

console.log(newSome1);










console.log("\n###################")
console.log("###################")
console.log("###################\n\n")



console.log("######### .find() ##########\n")





//.find()

/* find the first element of the array that satisfy the specific condition
 doesn't matter what index is the first element
=> if the the 1st element of the array meet the condition, it will
  return that element and brek from there. it will not go to any 
  other element in the array.

/*/



let total = [1, 2, 3, 7, 9]

//here  3%3===0 , we found it in index [2] and return the element 3 .
let newTotal = total.find((e) => e % 3 === 0);
console.log(newTotal);





//EXAMPLE:- 2
// find the even number
let total1 = [1, 3, 5, 11, 7, 9, 4]

//here  2%4===0 , we found it in index [6] and return the element 4 .
let newTotal1 = total1.find((e) => e % 2 === 0);
console.log(newTotal1);






//EXAMPLE:- 3
//find the odd number
let total2 = [1, 5, 9, 11, 3]

//here condition is matching the 
let newTotal2 = total2.find((e) => e % 3 ===0 );
console.log(newTotal2);




//EXAMPLE:- 4
//find the even number number
let total3 = [1, 5, 9, 11, 3]

//here condition is not matching the, so the out put will be undefined
let newTotal3 = total3.find((e) => e % 2 ===0 );
console.log(newTotal3);




//EXAMPLE:- 5
//find the word "book"
let word2 = ["apple", "orange", "book" , "note book"]

//here condition is not matching the 
let newWord = word2.find((e) => e === "book" );
console.log(newWord);








console.log("\n###################")
console.log("###################")
console.log("###################\n\n")



console.log("######### .find() ##########\n")




