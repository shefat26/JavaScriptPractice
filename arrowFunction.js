


// Annonomus arroow function


const sayHello= ()=>  "hellow world"

console.log(sayHello());



// single parameter

const squar = (num) => num*num ;

console.log(squar(5));



// add 
const  add = (a, b) =>{

    const sum = a + b;

    return sum ;

}

console.log(add(5,9));




// multiply

let multiply = (a,b)=>{

    return a*b;

}

console.log(multiply(6,7))



//

let arr = [10,12,15,13,14,11, 17, 19]

let a = []
let compare = (num)=>{

   

    for (let i = 0; i< arr.length; i++){

        if(num[i] >= 13){

            return a.push.num[i];
        }
    }
}

console.log(compare(arr))








// cons

const greater = (a,b) => {

    if( a > b){

        return " A is greater"

    }
    else{

        return " B is greater"
    }
}

console.log(greater(7,5));




// Arrow function with obj


let person = {

    firstName: "John",
    lastName: "Adams",
    age: 27

}

let bio = (details)=>{

    return `${details.firstName} ${details.lastName} is ${details.age} years`

}

console.log(bio(person));

console.log("\n#################\n")





// Array method()


const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages =[33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 
               25, 64, 32];


  
// calling all companies using for loop

for(let i = 0; i < companies.length; i++){

   // console.log(companies[i]);
}

console.log("\n###########\n")



// forEach()

 companies.forEach(function(company){

    console.log(company.category);
 })


//  let name = (param)=> companies.start ;
//  console.log(name(companies))



console.log()





// filter()

// let canDrink = [] ;

// for(let i = 0; i < ages.length; i++){

//     if(ages[i] >= 21){

//         canDrink.push(ages[i]);

//     }

// }

//console.log(canDrink)



// filter()

const canDrink = ages.filter(function(param){

    if(param>= 21){

        return true ;

    }

})

//console.log(canDrink)



// filter() using arrow function

const drinkAge = ages.filter((age) => age >= 21) 

console.log(drinkAge)



// filter() retail companies

let retail = companies.filter(function(company){

    if(company.category === "Retail"){

        return true ;

    }

})
console.log(retail);



// filter() using arrow function

let company = companies.filter((store) => store.category === "Auto" )

console.log(company);




// map()







//

function printHello(param) {
    return function (param2) {
      return param + param2;
    };
  }
  
  let a1 = printHello(5);
  console.log(a(3));
  
  let b = printHello("ABCD");
  console.log(b("word"));
  
  //
  
  let arr1 = [1, 2, 3, 4, 5];
  
  let x = arr.filter( (param) =>  param > 2  )
  
  console.log(x)
  
  

























