

/*
 
 1. Object with nested obj, Array and different data type


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











