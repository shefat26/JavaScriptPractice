


/*

Array Methods 

 1)  .ma() method

 2) .filter() method

 3) .reduce() method















*/





// .map() 
// .map() will alway return the new array

 let numbers =[ 1, 2, 3]

 let doubleNum = numbers.map((e) => e*2);
console.log(doubleNum);


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



console.log("\n###################")
console.log("#####################\n")


/*
// .filter
//.filter() will return the new array based on the .filter() condition

*/

// find the even number from the array using .filter()


let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let evenNum = num.filter((n)=> n % 2===0);
console.log(evenNum)



// find the odd number from the array using .filter()


let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let oddNum = num.filter((n)=> n % 3 === 0);
console.log(oddNum)


// find the similar word from the array using .filter()


let word = ["add", "subtract", "plus", "minus", "add", "plus"]

let similarWord = word.filter((n)=>{  
    
      return n.word === "add" && n.word === "plus" ;

       
});
console.log(similarWord)


let word1 = ["add", "subtract", "plus", "minus", "add", "plus"]

let similarWord1 = word.filter((n)=> n === "plus");
console.log(similarWord1)



// third example 
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
console.log("###################\n")






//  .reduce() 

// .reduce() function will take two parameter (accumulator, num), 
//here here accumulator is --> accumulator + num, num param will iterate through the array
// .reduce() will return one number after accumulating the array element



// accumulate the array using .reduce() 

let numb = [1, 2, 3, 4, 5];

let sum = numb.reduce((accu,num)=> accu + num, 0);

// 1st --> 0+1 = 1;
// 2nd --> 1+2 = 3;
// 3rd --> 3+3 = 6;
// 1st --> 6+4 = 10;
// 1st --> 10+5 = 15;

console.log(sum);



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


