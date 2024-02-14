


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

















