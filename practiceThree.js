



 let anArr = [1,2,3,4,5]
 let anArr2 = [6,7,8,9,10]

//let newAnArr = [...anArr,...anArr2];

let  [,...xyz] = anArr ;

console.log(xyz);




let product = {
    name: "laptop",
    price: 1000,
    count: 5,
  };


 // dectructure

//let {name:item, price:amount, count:quantity} = product;

let {count,...item} = product

console.log(item)


 
 let product2 = {
   
    name2: "desktop",
    price2: 1500,
    count2: 2,
   
  };

// destructure
 let {name2,...prd} = product2 ;

console.log(name2)






 let product3 = {

   ...product,
   ...product2 
 }

const world = "hello"



///
const aObj = {

  world:world 
}

console.log(aObj);




// filter()
/*The filter() method of Array instances creates a shallow copy of 
a portion of a given array, filtered down to just the elements from 
the given array that pass the test */

let employee = [

    {name: "John", age: 30 , gender: "male" },
    {name: "Tom" , age: 45 , gender: "male" },
    {name: "Sara" , age: 35, gender: "female" },
    {name: "Ria" , age: 50, gender: "female" },
    {name: "Peter" , age: 25, gender: "male" },
    {name: "Jerin" , age: 26, gender: "female" }

]

let find = employee.filter((e) =>{

    return e.age > 30 && e.gender === "female";
})

console.log(find);


// remove all the duplicate use   filter()

let num = [1,2,3,2,1,3,3,5,4,6];

console.log(num);

let newNum = num.filter((value, index, e) => {

  return e.indexOf(value) === index ;

})

console.log(newNum);


// filter duplicate and remainder "0" 

let div = num.filter(( e) => {
  
  return e%2 === 0 && e > 2 ;

}) ;

console.log(div);



//////////////////////////////////
///////////////////////////////////
//////////////////////////////////



let numb = [1,2,3,4,5]

let sum = numb.reduce((acc,e) => acc + e, 0)

console.log(sum);






// Find the max number 

let top = [10,5,25,8,30,15];

let newTop = top.reduce((max,num) => {

   return num > max ? num : max  ;

}, top[0]);

console.log(newTop);




// shoppint cart 


let cart = [

  { name: "jeans", price: 500},
  { name: "shirt", price: 300},
  { name: "shoes", price: 1000},
  { name: "Hat", price: 100},
  { name: "Tshirt", price: 400}

]


// reduce()
let totalPrice = cart.reduce((total, item) => total + item.price,  0);

console.log(totalPrice);


// filter()
let some = cart.filter((e) => e.price >300);

console.log(some);










