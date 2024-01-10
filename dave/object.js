

/*
 
 1. Object with nested obj, Array and different data type

 2. Object.Create()

*/


// 1. Object with nested obj, Array and different data types and also with methods

 let objt = {

    alive: true,
    answer: 42,
    hobbies: ["Eat", "Sleep", "Code" , "practice", "A", "B", 1, 2, 3, true, false],
    degree: [9,6,7, 12, 8,3,99,44,32],
    beverage: {
        morning: "Coffee",
        afternoon: "Iced Tea"

    },

    //adding anonymous function inside the obj
    action: function(){

        return "Hellow World"
    },

    anotheract: function(){

        return `This is the time for ${this.beverage.morning}`
        
    },

    c: "abcd"
 }

//  console.log(objt.alive)
//  console.log(objt)

 // accessing objects array index value
 //console.log(objt.hobbies[1])

 console.log(objt.degree[objt.degree.length-1]);
 console.log(objt.degree[objt.degree.length-2]);
 console.log(objt.hobbies[objt.hobbies.length-1]);

 // accessing nested object property
//  console.log(objt.beverage.morning)

 // we can also call object property with bracket
//  console.log(objt["answer"])

 // accessing anonymous function inside the object
//  console.log(objt.action());

// accessing anonymous function inside the object
//  console.log(objt.anotheract());




const add = (a,b) =>  {
   return a + b
};


console.log(add(5,8));

console.log("\n\n")











/*

// Example:-2
// object.create()

=> Using constructor Obj "Object.create()", we can Inherit different 
object in to constructor object.
=> basically we are inheriting object property into new obj 

*/
const vehicle = {

    wheels: 4,
    engine: function(){

        return "Vrroooom!";

    }

}



// we are using generic obj "vehicle" as a constructor for truck obj
// const truck = Object.create(vehicle)

// truck.doors = 2;
// console.log(truck);

// //Inheriting vehicle obj property value
// console.log(truck.wheels);    
// console.log(truck.engine());



// we are using generic obj "vehicle" as a constructor for "car" obj
const car = Object.create(vehicle);
car.doors = 4;
car.engine = function(){

    return "Whooooosh!";

};

console.log(car);

console.log(car.engine());
console.log(car.wheels);



// we are using generic obj "car" as a constructor for "tesla" obj
// In other words we are injecting "car" obj into "tesla" obj
const tesla = Object.create(car)

tesla.mirror = 2;
tesla.window =  5;
tesla.exhost = "None"
console.log(tesla);

console.log(tesla.mirror)

console.log(tesla.wheels)

tesla.engine = function(){

    return "Shhhhhh....";

};

console.log(tesla.engine())


