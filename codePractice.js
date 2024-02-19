

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
  