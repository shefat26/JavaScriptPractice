


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











