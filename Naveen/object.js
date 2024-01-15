
/*

1.) object Literal

2. Constructor function

3. Class Style 

4. object.create()  method: with some proto type

5. Using Factory Function to create object



*/ 




let user = {

    name: "michael",
    age: 25,
    country: "USA",
    occupation: "Engineer"

}

console.log(user.name)
console.log(user.age)


console.log("\n##### ==== Constructor Function ==== ######\n")




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





//Example: Constructopr function

function Food(breakfast, lunch, dinner){


     // here we initialize the value
     this.breakfast = breakfast;
     this.lunch = lunch;
     this.dinner = dinner;


}

let item = new Food("muffin" , "Pizza" , 5);

// accessing constructor parameter value
console.log(item.breakfast+ " " + item.lunch + " " + item.dinner);







console.log("\n###########\n")






// Class Style 
// creating object with the help of class

class Customer{

    constructor(name, product){

        //initializing parameter inside constructor
        this.name = name;             // instance variable
        this.product = product;       // instance variable

    }


    //adding method inside the class

    addToCart(){

        console.log(`${this.product} added to cart`);

    }

}


// Instance/Object of the class 

let custom1 = new Customer("sifat", "MackBook pro")

console.log(custom1.name);
console.log(custom1.name);
custom1.addToCart()



console.log("\n########### ##############\n")




//4. object.create()  method: with some proto type


let employeeProtoType = {

    //naming the function to printInfo
    printInfo:function(){

        console.log(`hello, emp name is ${this.name}`)

    }

}


// it will create an object
let e1 = Object.create(employeeProtoType);

// provided this.name variable value "Tom"
e1.name = "Tom";

//call the printInfo function
e1.printInfo();



console.log("\n########## Factory Fuction ###########\n")



//5. Using Factory Function to create an object, it will return an object.

function createDepartment(deptName, hod){


    // this return will return the object
    return{
        deptName:deptName,
        hod:hod,

        getDepartmentInfo:function(){

            console.log(`hello, dept name is${this.deptName} and hod is ${this.hod}`)

        }
    }
}

// passing the deptName and hod value
let dept1 = createDepartment("Physics", "James Watson")
let dept2 = createDepartment("Maths", "Ali Adams")

//printing return object
console.log(dept1, "\n");

// call the getDepartmentInfo function inside the return obj
dept1.getDepartmentInfo();
dept2.getDepartmentInfo()

//accessing the return object value

console.log(dept1.deptName, dept1.hod);







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

  console.log(objt.alive)
  console.log(objt)

 // accessing objects array index value
 //console.log(objt.hobbies[1])

 console.log(objt.degree[objt.degree.length-1]);
 console.log(objt.degree[objt.degree.length-2]);
 console.log(objt.hobbies[objt.hobbies.length-1]);




