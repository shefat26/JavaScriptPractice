
//
const car = { type: "Fiat", model: "500", color: "white" };

let { type: year, model, color } = car;

console.log(year);
console.log(model);
console.log(color);

//

let param = (a, b, c) => {
  return (a + b) * c;
};

console.log(param(2, 2, 3));

let condition = (a, b, c) => {

  if (a > b && a > c) {

    return "A is greater";

  } else if (a < b && b > c) {

    return "B is greater";

  } else if (c > a && c > b) {

    return "C is greater ";

  } else {

    return "No number is greater";
  }

};

console.log(condition(4, 4, 4));



//Example:-2  Ternary Operator

let num1 = 12;
let num2 = 15;

let numbers = num1 == num2 ? "They are same " : "They are different";

console.log(numbers);





//Ternary or conditional operator

function compare(a, b) {
  
    return  a >= b ? "First one is greater" : "Second one is greater";
  
    
  }
  
  console.log(compare(5, 5));
  
  


  //
  function compare2(a, b) {
    
    let c = a >= b && b<= a ? "First one is greater" : "Second one is greater";
  
    return c;
  }
  
  console.log(compare2(5, 5));
  




  



