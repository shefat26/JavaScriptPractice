

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







//Example:-3
//

const band = {

    vocals: "Robert Plant",
    guiter: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Boham"

};

console.log(Object.keys(band));
console.log(Object.values(band));

console.log("\n")

// Using for in loop to loop through an object

for(let job in band){

 //accessing band object property value, 
 //Here "job" is the "keys" in obj
    console.log(band[job]);


}


for(let job in band){


     //accessing band object "jobs" position & property "value" position, 
     console.log(`on ${job}, it's ${band[job]}`);
}



// adding property in "band" obj
band.keyboard = "Piano";
console.log(band)


// adding method

band.sound = function(){

      return "Hooorrreeee"
}

console.log(band);
console.log(band.sound());


// Delete obj property from "band" obj

delete band.drums;

//this line will return boolean property.
console.log(band.hasOwnProperty("drums"));
//console.log(band);




//Example:-4

/*
 Destructuring  obj property

*/

const music = {

    vocals: "Robert Plant",
    guiter: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Boham"

};

/* Here we are replacing key "guiter" with "myVariable" and 
  we will console log "myVariable" instead of "musick.guiter" 
  to get the "guiter" key value */
const {guiter: myVariable} = music;

// expected output 'Robert Plant'
console.log(myVariable)


const {drums:myDrums } = music;
console.log(myDrums);







