
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

//console.log(compare(arr))





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





///


let fruit1 = ["apple", "banana", "mango", "pear"];

//findIndex()
let index_str = fruit1.findIndex((e)=> e === "mango");
console.log(index_str);



let index_str1 = fruit1.indexOf("mango");
console.log(index_str1);




// sort()

const months = ['March', 'Jan', 'Feb', 'Dec'];
let newMonth = months.sort();

//
let mapped = months.map((m) => (" MONTH ").concat(m))
console.log(mapped);




//object


let users = [
  { firstName: "Susan", lastName: "Steward", age: 17, hobby: "Singing" },
  { firstName: "Daniel", lastName: "Longbottom", age: 18, hobby: "Football" },
  { firstName: "Jacob", lastName: "Black", age: 19, hobby: "Singing" }
];


let newUser = users.find((u) => u.age === 15);
console.log(newUser)

//

let newUser1 = users.map((u) => {



   return   u.age >= 18? {
      ...u, person: "Adult"
      
    }:{

      ...u, person: "Minor"
    }
    
    

});
console.log(newUser1)






let num = [1,2,3,4,5];

let newNum = num.map((n)=> n * 2 );
console.log(newNum);


// 
 
let newNum1 = num.forEach((n)=> n * 2 );
//console.log(newNum1);


 
let newNum2 = num.map((n)=> n / 2 );
console.log(newNum2);






/////


function printHello(param) {
    return function (param2) {
      return param + param2;
    };
  }
  
  let a1 = printHello(5);
  //console.log(a1(3));
  
  let b = printHello("ABCD");
  //console.log(b("word"));
  
  //
  
  let arr2 = [1, 2, 3, 4, 5];
  
  let newArr = arr2.filter((a) => a <= 3);
  
  //console.log(newArr);
  
  
  
  
  ////
  function new1(param) {
    return function (param4) {
      return param + param2;
    };
  }
  
  let param4 = new1(5);
  
  //console.log(param1(2));
  
  
  let param3 = new1(3);
  //console.log(param2(6));



// rest operator

let arr5 = [6,7,8,9,10,11,12]

let [,,, ...p] = arr5;


console.log(p);





// spread operator
let arr4 = [1,2,3,4,5]

let arr6 = [...arr4, ...arr5]
console.log(arr6)


///

let obj4= {

  name: "James"
}

let obj5= {

  job: "Teaching",
  age: 35
}

//
let obj6 = {

  ...obj4,
  ...obj5
}

//console.log(obj6)



//
let str1 = "abcd"
let str2 = "str2"

let obj7 = {

  str1,
  str2
  
}

console.log(obj7)


//

let user = {

  name: "michael",
  age: 25,
  country: "USA",
  occupation: "Engineer",
  homeOwner: "yes",


}

let {name,age,country,Occupation} = user ;

console.log(name)
console.log(age)



//

let  d = [1,2,3,4,5]

let f = [6,7,8,9,10]

let g = [...d, ...f];

console.log(g);




///


// run test cases on remote machine:
// tell me browserName, browserVersion, remoteExcution



function browserInfo(browserName, browserVersion, remoteExcution){

  if(typeof browserVersion === 'number' && typeof remoteExecution === 'boolean'){

      console.log(`'Browser:' ${browserName}, 
      'version:' ${browserVersion}, 
      'remoteExe:'${remoteExcution}`);

  }
  else{

      console.log(`Browser: ${browserName}`);
  }


}

browserInfo('chrome', 115, true)
browserInfo('chrome', 115)
browserInfo('firefox')
