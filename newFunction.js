

function add(a,b){

    return a+b ;

}
console.log(add(5,4));




function print(){

    return "hi this is JS"

}
console.log(print())




// Function Expression/ Anonymous function

let multiply = function(x , y){

    return x * y;

}

//console.log(multiply(5,6));

let mul = multiply(5,7);

console.log(mul);


//

let div = function(a,b){

    let division = a/b ;

    return division ;

}

let newDiv = div(8,2)

console.log(newDiv);




//



function counts(num){

    if(num > 26){

       return "greater" ;
    }
    else{

        return "smaller" ;

    }
}

console.log(counts(25))



//

function sum(num1,num2){

    if(num2 === undefined){

        return num1+num1;

    }
    else{

        return num1 + num2 ;

    }

}

console.log(sum(5, 12));


//

function userMail(email){

    //
    return email.slice(0,email.indexOf("@"));

}

console.log(userMail("mymail@yahoo.com"));
console.log(userMail("theirmail@yahoo.com"));






// Anonymous function 


let properCase = function(name){


    return name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();

}

console.log(properCase("jAmEs"));
console.log(properCase("aDaMs"));


