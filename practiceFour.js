

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



////  Array destructur with rest and spread operator

const cars = [ "Saab", "Volvo", "BMW", "Audi", "Toyota" ];

const truck =[ "pickup", "semiTruck", "trailer", "EVTruck", "van"]

let [,,...ca] = cars ;

let [D,E,F, ...tr] = truck ;


let vehicles = [...ca, ...tr]

console.log(vehicles);





console.log("\n#############################\n");







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
  
  // destructure
  
  let { name, ...prod } = product;
  
  //rest operator
  let {count2, ...anProd} = anProduct
  
  //spread operator
  let newProd = { ...prod, ...anProd };
  
  console.log(newProd);




  console.log("\n################################\n");




  // using function

  function add(parm){

    let arr = [{
      item:1,
      price:300
    }]
    return [...arr, parm]
    
  }
  console.log(add(product))
  
  

  //
  function sum(a,b, ...arg){

    let add = a+b;
  
    //let ar = [...arg];
   
    // for( let i = 0; i <= arg.length; i++){

    //     // let total = add + i ;
    // }

    return add ;

  }

  console.log(sum(1,2,4,5,6))


  

