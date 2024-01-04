
/*

1.) object Literal

2. Constructor function



*/ 




let user = {

    name: "michael",
    age: 25,
    country: "USA",
    occupation: "Engineer"

}

console.log(user.name)
console.log(user.age)


console.log("\n###########\n")


//2. Using Constructor function

function Car(brand,model,price){

    // here we initialize the value
    this.brand =brand;
    this.model = model;
    this.price = price;

}

let c1 = new Car("Toyota", "86", 15000);
let c2 = new Car("Bmw", "X5", 50000);

console.log(c1.brand+ " " + c1.model + " " + c1.price);
console.log(c2.brand, c2.model)





//Example:2 Constructopr function

function Food(breakfast, lunch, dinner){


     // here we initialize the value
     this.breakfast = breakfast;
     this.lunch = lunch;
     this.dinner = dinner;


}

let item = new Food("muffin" , "Pizza" , 5);

console.log(item.breakfast+ " " + item.lunch + " " + item.dinner);







console.log("\n###########\n")




















