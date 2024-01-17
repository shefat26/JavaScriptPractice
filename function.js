


//
function compare2(a, b) {
    let c = a >= b && b <= a ? "First one is greater" : "Second one is greater";
  
    return c;
  }
  
  console.log(compare2(5, 5));
  
  // &&
  
  5 == 6 && console.log("Equal");
  




  // Ternary operator with function
  
  let arr = [9, 12, 11, 13, 14, 16, 18, 19];
  
  function arr1(param) {
    let a = [];
  
    for (let i = 0; i < param.length; i++) {
      if (param[i] > 12) {
        a.push(param[i]);
      }
    }
    return a ;
  }
  console.log(arr1(arr))





 //

 let obj = {

    name: "John Adams",
    Job: "Mechanic",
    house: "rental",
    action: function(){

        return "hello world"
    }

 }

 //console.log(obj.action(2,3));


 function objCall(param){

    return param.Job;
 }
console.log(objCall(obj));
console.log(objCall(obj.action()));











