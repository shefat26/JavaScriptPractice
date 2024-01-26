


// class & object & constructor
// Duplicate constructor or constructor overloading is not permited in javaScript
// We can't have duplicate constructor in javaScript, we can only have one constructor in javaScript



class Car {

    // first constructor
    // Duplicate constructor or constructor overloading is not permited in javaScript
    constructor(name, price,model, color){

        this.name = name;
        this.price = price;
        this.model = model;
        this.color = color;

    }



    refuel(){

        console.log(this.name +  " car is refueled");
    }

}

// new keyword: to create the object:
 const c1 = new Car("BMW", 100, "X5", "Black");



 console.log(c1.name);
 console.log(c1);
 console.log(c1.price);
 console.log(c1.model);
 c1.refuel()

  
 console.log("\n################\n")

 //
 const c2 = new Car("Honda", 20000, "Civic", "white");

 console.log(c2)
 console.log(c2.name);
 console.log(c2.model);
 console.log(c2.color);
 c2.refuel()


 console.log("\n################\n")


 const c3 = new Car("Audi")

 console.log(c3)
 console.log(c3.name);
 console.log(c3.model);
 console.log(c3.color);
 c3.refuel()

