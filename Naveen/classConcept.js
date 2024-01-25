



// Object with ternary operator

let users1 = [
    { firstName: "Susan", lastName: "Steward", age: 17, hobby: "Singing", salary: 30000 },
    { firstName: "Daniel", lastName: "Longbottom", age: 18, hobby: "Football", salary: 70000 },
    { firstName: "Jacob", lastName: "Black", age: 19, hobby: "Singing", salary: 50000 },
  ];
  
  let mapped1 = users1.map((u) => {
  
  
    return {
      ...u,
      
      fullName : u.firstName + "" + u.lastName,
      adult : u.age >= 18 ? true : false, 
      minor : u.age <18 ? true : false,
      salary: u.salary <= 30000 ? "lowerClass" : "middleClass"
      
    };
  });
  console.log(mapped1);
  
  
  // Destructring object
  
  let obj8 = {
    firstName: "Susan",
    lastName: "Steward",
    age: 17,
    hobby: "Singing",
  };
  
  let { firstName, lastName, age, hobby } = obj8;
  
  console.log(firstName);

  


  ///


  class Car{

    constructor(name, price, model, color){

        this.name
        this.price
        this.model
        this.color

    }


    refuel(){

        console.log("car is refueled");

    }


  }

  const c1 = new Car("BMW", 100, "520d", "Black")

  console.log(c1.name);
