


//

let arr = [1, 2, 3, 4, 5];

let newArr = arr.filter((a) => a <= 3);

console.log(newArr);

////
function new1(param) {
  return function (param2) {
    return param + param2;
  };
}

let param1 = new1(5);

console.log(param1(2));

let param2 = new1(3);
console.log(param2(6));


///

let obj = {
    personNames: "James",
    job: "Driver",
    home: "rentals",
  };
  
console.log(obj.personNames);


let newObj = ({ personNames: fullName, job: work, home: house } = obj);

console.log(fullName, work, house);
 console.log(fullName)
console.log(fullName)



///

// Ternary Operator


let a = 12;
let b = 22;

function ternary(param) {
  return param > x ? "param is greater than X" : "param is less than X";
}
console.log(ternary(5));