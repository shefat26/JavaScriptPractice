

let users = [
    { firstName: "Susan", lastName: "Steward", age: 17, hobby: "Singing" },
    { firstName: "Daniel", lastName: "Longbottom", age: 18, hobby: "Football" },
    { firstName: "Jacob", lastName: "Black", age: 19, hobby: "Singing" },
  ];
  
  // object destructure  with rest and
  
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
  
  // dectructure
  
  // destructure
  //let { name2, ...prd } = product2;
  
  //console.log(name2)
  
  let product3 = {
    ...product,
    ...anProduct,
  };
  
  const world = "hello";
  
  ///
  const aObj = {
    world: world,
  };
  
  //console.log(aObj);
  






  let employee = [
    { id: 1, name: "John", age: 30, gender: "male" },
    { id: 2, name: "Tom", age: 45, gender: "male" },
    { id: 3, name: "Sara", age: 35, gender: "female" },
    { id: 4, name: "Ria", age: 50, gender: "female" },
    { id: 5, name: "Peter", age: 25, gender: "male" },
    { id: 6, name: "Jerin", age: 25, gender: "female" },
  ];
  
  //console.log(employee)
  
  //
  let rohim = { id: 7, name: "rohim", age: 28, gender: "male" };
  
  let korim = { id: 8, name: "korim", age: 33, gender: "male" };
  
  let both = [rohim, korim];
  //console.log(both)
  
  // add data to employee Array
  function addEmp(param) {
    return [...employee, ...param];
  }
  //console.log(addEmp(both));
  
  // removing data to employee Array
  function removeEmp(arg, argu) {
    return employee.filter((e) => e.name !== arg && e.age > argu);
  }
  //console.log(removeEmp("Tom", 26));
  
  // finding data from employee Array
  function findEmp(arg) {
    return employee.filter((e) => e.age !== arg);
  }
  //console.log(findEmp(25));
  
  ///
  let find = employee.filter((e) => {
    return e.age > 30 && e.gender === "female";
  });
  
  //console.log(find);
  
  // remove all the duplicate use   filter()
  
  let num = [1, 2, 3, 2, 1, 3, 3, 5, 4, 6];
  
  console.log(num[num.length - 1]);
  
  for(let i =0; i<=num.length; i++){
  
    console.log(num[i])
  }
  
  let newNum = num.filter((value, index, e) => {
    return e.indexOf(value) === index;
  });
  
  //console.log(newNum);
  
  // filter duplicate and remainder "0"
  
  let div = num.filter((e) => {
    return e % 2 === 0 && e > 2;
  });
  
  //console.log(div);
  