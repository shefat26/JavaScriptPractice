
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
  
  
  










