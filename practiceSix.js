

// filter()
/*The filter() method of Array instances creates a shallow copy of 
a portion of a given array, filtered down to just the elements from 
the given array that pass the test */

let employee = [
    { id:1, name: "John", age: 30, gender: "male" },
    { id:2, name: "Tom", age: 45, gender: "male" },
    { id:3, name: "Sara", age: 35, gender: "female" },
    { id:4, name: "Ria", age: 50, gender: "female" },
    { id:5, name: "Peter", age: 25, gender: "male" },
    { id:6, name: "Jerin", age: 26, gender: "female" },
    
  ];
  
  
  
  //
  let rohim =  { id:7, name: "rohim", age: 28, gender: "male" };
  
  let korim =  { id:8, name: "korim", age: 33, gender: "male" };
  
  //let both = [rohim,korim]
  
  // add data to employee Array
   function addEmp(emp){
  
     
  
     return [...employee, emp];
  
   }
  console.log(addEmp(rohim));
  

  
  // removing data to employee Array
   function removeEmp(id){
  
     return employee.filter((e) => e.id !== id)
    
   }
  console.log(removeEmp(2))
  
  
  
  // finding data from employee Array
   function findEmp(id){
  
     return employee.find((e) => e.age < id)
  
   }
  console.log(findEmp(40))



  ///
let find = employee.filter((e) => {
    return e.age > 30 && e.gender === "female";
  });
  
  //console.log(find);
  
  


let fin = employee.filter((e) => {
    return e.age > 30 && e.gender === "male";
  });
  
  //console.log(fin);
  
  





  ///
let product = {
    name: "laptop",
    price: 1000,
    count: 5,
  };
  
  let anProduct = {
    name2: "desktop",
    price2: 1500,
    count2: 2,
  };
  
  let { count, ...pr } = product;
  let { name2, ...ap } = anProduct;
  
  let mixProduct = { ...pr, ...ap, key: "monitor" };
  console.log(mixProduct);

  



  //////////////////////////////////////
  //////////////////////////////////////




// remove all the duplicate use   filter()

let num = [1, 2, 3, 2, 1, 3, 3, 5, 4, 6];

//console.log(num);

let newNum = num.filter((value, index, e) => {
  return e.indexOf(value) === index;
});

//console.log(newNum);

// filter duplicate and remainder "0"

let div = num.filter((e) => {
  return e % 2 === 0 && e > 2;
});

console.log(div);

//////////////////////////////////


let numb = [1, 2, 3, 4, 5];

let sum = numb.reduce((acc, e) => acc + e, 0);

console.log(sum);

// Find the max number

let top = [10, 5, 25, 8, 30, 15];

let newTop = top.reduce((max, num) => {
  return num > max ? num : max;
}, top[0]);

console.log(newTop);








