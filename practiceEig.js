
let arow = (e, f) => e + f;
console.log(arow(5, 3));

let print = () => "Hello world";

console.log(print());

let add = function (a) {
  return function (b) {
    return a + b;
  };
};

console.log(add(2));

let employee = [
  { id: 1, name: "John", age: 30, gender: "male", job: "Teacher" },
  { id: 2, name: "Tom", age: 45, gender: "male", job: "Teach" },
  { id: 3, name: "Sara", age: 35, gender: "female", job: "Banker" },
  { id: 4, name: "Ria", age: 50, gender: "female", job: "Dev" },
  { id: 5, name: "Peter", age: 25, gender: "male", job: "Driver" },
  { id: 6, name: "Jerin", age: 26, gender: "female", job: "Mechanic" },
];

let Abdul = { id: 7, name: "Abdul", age: 28, gender: "male", job: "Teacher" };

let James = { id: 8, name: "James", age: 33, gender: "male", job: "Dev" };



//filter()

let oldPeople = employee.filter((e) => e.age >= 30);

console.log(oldPeople);

// filter()

let allMale = employee.filter((e) => e.age === 50);

console.log(allMale);

// find()

let findAge = employee.find((e) => e.age === 50);

console.log(findAge);

console.log("\n\n");

// map()

let mapped = employee.map((e) => {
  return {
    ...e,

    exp: e.age < 30 ? "junior" : "Senior",
    married: e.age >= 45 ? true : false,
  };
});
console.log(mapped);

// adding object
let adds = [...employee, Abdul];
console.log(adds);



// 



let cloth =[ 

{name: "T-SHIRT",price: 1000,count: 5, Place:"USA"},
{name:"SHIRT", price: 1500, count: 2, place: "China"},
{ name:"PANT", price:500, count:10, place:"India" },
{ name:"SHOES", price:300, count:20, place:"Japan" }

]


// map()

let a = cloth.map((e) => e.price >300 )

console.log(a);



let b = cloth.map((e) => e.price * e.count)

console.log(a);



//

let frut = ["Apple", "orenge", "Banan", "mango" , "50 fruit"]

let sorts = frut.sort();

console.log(frut);


console.log("\n#########\n");

// forEach()

let each = frut.forEach((e) =>  console.log(e));


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

