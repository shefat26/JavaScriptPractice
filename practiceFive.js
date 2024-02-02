

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



  