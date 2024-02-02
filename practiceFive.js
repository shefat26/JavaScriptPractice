

// object dectructring practice

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
  



  let product3 = {
    ...product,
    ...anProduct,
  };
  
  const world = "hello";
  
  ///
  const aObj = {
    world: world,
  };
  
  console.log(aObj);


  console.log("\n################\n");

  ////

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
  
  
  
  // add data to employee Array
   function addEmp(emp){
  
    return [...employee,emp]
  
   }
  console.log(addEmp(korim));
  
  
  // removing data to employee Array
   function removeEmp(id){
  
     let remaining = employee.filter((e)=> e.id !== id)
     
      return remaining;
   }
  console.log(removeEmp(1))
  
  
  
  // finding data from employee Array
   function findEmp(id){
  
     return employee.find((e)=> e.name === id)
  
   }
  console.log(findEmp("Peter"))
  
  

  
  