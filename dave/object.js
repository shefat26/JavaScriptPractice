

/*
 
 1. Object with nested obj, Array and different data type


*/


// 1. Object with nested obj, Array and different data types and also with methods

 let objt = {

    alive: true,
    answer: 42,
    hobbies: ["Eat", "Sleep", "Code"],
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
        
    }
 }

 console.log(objt.alive)
 console.log(objt)

 // accessing objects array index value
 console.log(objt.hobbies[1])

 // accessing nested object property
 console.log(objt.beverage.morning)

 // we can also call object property with bracket
 console.log(objt["answer"])

 // accessing anonymous function inside the object
 console.log(objt.action());

// accessing anonymous function inside the object
 console.log(objt.anotheract());





