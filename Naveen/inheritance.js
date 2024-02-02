

//inheritance

//To create a class inheritance, use the extends keyword.

// Inheritance means accessing property / method() from the parent (super class) class .



class vehicle{

    // constructor
   constructor(make,model,year){

       this.make = make;
       this.model = model;
       this.year = year;

   }


   // method()

   getInfo(){

       return `${this.make}, ${this.model}, ${this.year}`;

   }

   startEngine(){

       console.log("starting engine...");

   }

   stopEngine(){

       console.log("Stopping Engine...");

   }

}


// child class of vehicle, use extend method

class car extends vehicle{



    //we created a constructor and added "fuelType" parameter in "car" class constructor */
   constructor(make,model,year, fuelType){


       //super keyword is being used to call the parent class constructor 
       /* we called this constructor from parent "vehicle" class */
       super(make,model,year)

       this.fuelType = fuelType  // we initialize fuelType parameter here


   }


   driveCar(){

       console.log("drive the car " + this.model)

   }

}




// Second child class of vehicle, use extend method



