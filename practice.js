
// Practice



function new1(param) {
    return function (param2) {
      return param + param2;
    };
  }
  
  let param1 = new1(5);
  
  //console.log(param1(2));
  
  
  let param2 = new1(3);
  //console.log(param2(6));
  
  
  
  
  let obj = {
  
    names: "sifat",
    job: "Information Technology",
    home: "rentals",
    
  }
  
  //console.log(obj.names);
  
  let newObj = {names:fullName, job:work, home:house } = obj
  
  console.log(fullName, work, house)
  // console.log(fullName)
  // console.log(fullName)
  
  
  
  
  let x = 5;
  let y = 9;
  
  function ternary(param){
  
    return param > x ? "param is greater than X" : "param is less than X"
    
  }
  console.log(ternary(5))
  
  
  
  
  
  // function fun(a){
  
  //   return function(b){
  
  //     return b + a
  //   }
  
  
  // }
  
  // let newFun = fun(8)
  
  // console.log(newFun(4))
  
  
  
  let hello = ()=> "hello world";
  console.log(hello());
  
  
  
  ////
  
  let t = "xyz"
  let v = "abc"
  let hello1 = t.concat(v) ;
  console.log(hello1);
  
  
  
  ////
  let total = [1, 2,3,4,5,6];
  
  let newTotal = total.find((e) => e > 4 )
  
  console.log(newTotal)
  
  
  

  ///

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













