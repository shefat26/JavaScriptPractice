


let anotherObj = {

    alive: true,
    answer: 42,
    hobbies: ["Eat", "Sleep", "Code"],
    beverage: {

        morning: "Coffee",
        afternoon: "Iced Tea"

    },

    action: function(){

        return `Time for${this.beverage.morning}`;

    }

};

console.log(anotherObj.alive);
console.log(anotherObj.hobbies);
console.log(anotherObj.answer);
console.log(anotherObj.hobbies[1]);
console.log(anotherObj.beverage.afternoon);
console.log(anotherObj.beverage.morning);





// Object.create() 


let vehicle = {

    wheels: 4 ,
    engine: function(){

        return "Vrroooom!" ;

    }

}


//Using an object as a constructor for another object, "vehicle" is constructor

let truck = Object.create(vehicle);

truck.doors = 2 ;

console.log(truck);

// Inheriting from vehicle obj
console.log(truck.wheels);


// Inheriting from vehicle obj
console.log(truck.engine());



////Using an object as a constructor for another object, "vehicle" is constructor

let car = Object.create(vehicle);

car.doors = 4;

car.engine = function(){

    return "Whoosh!"

};


console.log(car.engine());
console.log(car.wheels);





////Using an object as a constructor for another object, "vehicle" is constructor


let tesla = Object.create(car);

// Inheriting from car obj
console.log(tesla.wheels)


tesla.engine = function(){

    return " Shhhhh....." ;

}

console.log(tesla.engine());






/////////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////


// RANDOM Obj practice



let obj = { names: "James", game: "soccer", age: 30, position: "strike" };

let { names, ...activity } = obj;

console.log(names);
console.log(activity);

let field = {
  names,
  ...activity,
};

console.log(field);

//

let arr = [
  {
    names: "James",
    game: "soccer",
    age: 30,
    position: "strike",
    income: 40000,
    gender: "Male",
  },
  {
    names: "Jonson",
    game: "soccer",
    age: 35,
    position: "strike",
    income: 50000,
    gender: "Male",
  },
  {
    names: "Lily",
    game: "soccer",
    age: 25,
    position: "strike",
    income: 30000,
    gender: "female",
  },
  {
    names: "Sara",
    game: "soccer",
    age: 23,
    position: "strike",
    income: 20000,
    gender: "female",
  },
];


let mapping = arr.map((e) => {

   return { 
     ...e,
      senior:e.age >25 ,

      status:e.income > 30000 ? "UpperClass" : "MiddleClass"
          
          } 
  
});

console.log(mapping)














