


let player = [

    { names: "James", game: "Soccer", age: 35, position: "Forward"  },
    { names: "Jonny", game: "Soccer", age: 30, position: "Forward"  },
    { names: "Russel", game: "Soccer", age: 25, position: "Forward"  },
    { names: "Filder", game: "Soccer", age: 20, position: "Forward"  },
    { names: "Watson", game: "Soccer", age: 38, position: "Forward"  }

]


//rest operator

let [, , ,...pos ] = player

console.log(pos);


// spread operator

let [...clon] = player ;

console.log("Spread Operator :- ",clon);



// sort

let device = ["Laptop", "Phone", "Tablet", "Cell phone", "Apple", "accent"]
let organize = device.sort()

console.log("Organize :-",organize);











//Destructuring Object
let v = ["BMW", "ToyoTa", "KIA"];

let person = {
  job: "IT",
  age: 27,
  names: "John",
  car: v,
  business: "Clothing line",
  house: "Private house",
};

// renaming destructure variable, business to commars
//let { business : comars } = person;
// //console.log(comars);

let { house } = person;
 console.log(house);

// renaming destructure key, job to work
 let { job:work } = person ;
 console.log(work);





















