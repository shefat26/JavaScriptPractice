


let player = [

    { names: "James", game: "Soccer", age: 35, position: "Forward"  },
    { names: "Jonny", game: "Soccer", age: 30, position: "Bacword"  },
    { names: "Russel", game: "Soccer", age: 25, position: "Strick"  },
    { names: "Filder", game: "Soccer", age: 20, position: "Keeper"  },
    { names: "Watson", game: "Soccer", age: 38, position: "Mid"  }

]


//rest operator

let [, , ,...pos ] = player

console.log(pos);


// spread operator

let [...clon] = player ;

console.log("Spread Operator :- ",clon);



// filter

let getData = player.filter((e) => e.age > 30)

console.log("\n\nfilter:- \n", getData);


//map()

let mapping = player.map((e) => e.age === 30)

console.log(mapping);




// sort

let device = ["Laptop", "Phone", "Tablet", "Cell phone", "Apple", "accent"]



let organize = device.sort()

console.log("Organize :-",organize);



// find()

let look = device.find((e) => e === "Phone");

console.log(look);


// indexOf()

let indx = device.indexOf((e) => e === "Phone");

console.log(indx)









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



//
 const car = { type: "Fiat", model: "500", color: "white" };

let { type: year, model, color } = car;

console.log(year);
console.log(model);
console.log(color);



function obj(a){

    if( model=== "500" && color === "white"){

        console.log("true")
    }

    return model ;
}

console.log(obj(car))



//


let arr = [1,2,3,4,5,6,7,8,9,10];

function pushed(param) {
  let a = [];

  for (let i = 0; i < param.length; i++) {
    if (param[i] > 6) {
      a.push(param[i]);
    }
  }
  return a ;
}
console.log(pushed(arr))














