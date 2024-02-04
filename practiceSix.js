

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

  


  