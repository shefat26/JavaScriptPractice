
/* 
 Function

*/



function sum(num1, num2){

    return num1 + num2;

}

console.log(sum(3,7));




//EXAMPLE :-2
// Handling missing parameter
function other(num1, num2){

    if(num2 === undefined){

        return num1+num1;

    }
    
    return num1+num2;

}

console.log(other(2))




//Example:- 3
// Another Function Example: getUserNameFromEmail()

function getUserNameFromEmail(email){

    //this line will slice out the email "@"and rest of the domain name
    return email.slice(0, email.indexOf("@"));

}

console.log(getUserNameFromEmail("playerOne@randomEmail.com"));
console.log(getUserNameFromEmail("user@gitHub.com"));




//Example-4
// Anonymous Functions
// Anonymous Functions used in the object property

const  multiply = function (a,b){

    return a*b ;

}

console.log(multiply(4,6));




// Anonymous Function in Object

const obj = {

    name : "Anonymous Function",
    call: function(){

        return "hello"
    },

    id: 43452,
    badge: "Fourth rank"

}

//obj.call()
console.log(obj.call())
console.log(obj.badge)




//Example :-5
// Arrow function

const toProperCase = (name) => {

    return name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();

}

console.log(toProperCase("joHNy awake"));











































































