

//



let users = [
    {
      firstName: "Susan",
      lastName: "Steward",
      age: 17,
      hobby: "Singing",
      salary: 30000,
    },
    {
      firstName: "Daniel",
      lastName: "Longbottom",
      age: 18,
      hobby: "Football",
      salary: 70000,
    },
    {
      firstName: "Jacob",
      lastName: "Black",
      age: 19,
      hobby: "Singing",
      salary: 50000,
    },
  ];
  
  let a = [1, 2, 3, 4, 5,6];
  let p = [7, 8, 9, 10];
  
  //Rest operator
  let [m,,...d] = a;
  console.log(d);
  console.log(m);
  
  //spread operator
  let c = [...a, ...d];
  console.log(c);
  
  // Ternary operator
  
  let turn = a.length > 5 ? "SP length is greater" : "SP length is smaller";
  
  console.log(turn);
  



  
  ////
  ////
  // Object practice
  
  let obj = {
    firstName1: "Susan",
    lastName1: "Steward",
    age1: 17,
    hobby1: "Singing",
    salary1: 30000,
  }



// destructring object

let {hobby1,salary1, firstName1,lastName1, ...bio} = obj

console.log(bio)
console.log(firstName1)
console.log(lastName1)


console.log("\n#############\n")

// renaming object

let anObj = {

 person: "James Watson",
 job : "Banker",
 house: "rent",
 earnings: 50000
}


let {person: names, job:work, house:home, earnings: earn} = anObj ;

console.log(names)
console.log(work)
console.log(home)
console.log(earn)




// map() 

const arr = [1, 4, 9, 16];

let newArr = arr.map((e) => e * 2);
console.log(newArr)

let div = newArr.map((e) => e/2 );
console.log(div);



//

const num = [1, 4, 16, 9];

//The Math.sqrt() static method returns the square root of a number.

let newNum = num.map((e) => Math.sqrt(e));

console.log(newNum);





// Multiparameter map()
let aNum = num.map((value,index, e) => {

  return value * index 

})

console.log(aNum);



// map with object


let device =[ 

  {

  name: "laptop",
  price: 1000,
  count: 5
},
{
  
  name:"desktop",
  price: 1500,
  count: 2

},
{
  name:"phone",
  price:500,
  count:10
}

]

let totalValue = device.map((item) => item.price * item.count);

console.log(totalValue);


// 
let priceCheck = device.map((item) => {

  return item.count === 5  ? "True" : "False"

})

console.log(priceCheck);



// string to numbers 

let str = ["1", "2", "3", "4"]

let nums = str.map(Number);

console.log(nums);




// p = function(item){

//   return item.count === 2 ? "Price matched" : "Price did not match"

// }








