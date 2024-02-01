

// Array destructure

let arr = [1, 2, 3, 4, 5];
let anArr = [6, 7, 8, 9, 10];

//spread
let p = [...arr, ...anArr];

console.log(p);

//rest operator

let [A, B, C, ...py] = arr;
let [, , ...q] = anArr;

let sumArr = [A, B, C, ...q];

console.log(sumArr);



// object destructure 

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
  
  // destructure
  
  let { name, ...prod } = product;
  
  //rest
  let {count2, ...anProd} = anProduct
  
  //spread
  let newProd = { ...prod, ...anProd };
  
  console.log(newProd);


