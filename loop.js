

var flag = true

if (!flag){                        //(!flag) means not true here, we just used quickest way to write false

    console.log("this is valid")

}
else {


    console.log("the second one is true")

}


console.log("")

var a = 9
var b = 6
var c = 3

if (b>=a){

    console.log("True")

}
else if (c>=b){

    console.log("Invalid")

}
else{

    console.log("None of them are correct")
}


console.log("###################################################")





// Now we will work withe the While Loops

// If the condition is True while loop will run till the false condition.
// so the while loop will stop only when the condition is false.


let i = 0

while(i<10){

    i++
    console.log(i)
}



console.log("")

var bar = false

while(bar) {

    console.log(bar)

    bar = true
}



/////


// Now we will will work with do while(){ } Loop

// in do while() { } Loop , before the condition we will have statement ad it will run befor the condition
// if the condition of the Loop is True/False  the statement will run eventually an then it will go to the conditon
// if you have any requirements of executuion before loops, then go withe  " do while loop"


let d = 0

while(d>10){

 console.log("d is greater than ten")

}

// do{

//   console.log("d is less than Ten")
//  i++
// }
// while(d<10);


//     console.log("Ten is greater than d")


// console.log("end")



let required = true

while(required){

    console.log(required)

    required = false
}



console.log("#######################")




// Now we will work on for loop 

console.log("d is greater than ten")


for (a = 2; a <= 12; a++){

    console.log(a)
}


console.log("")



// 2 and 5

// from 1 to 10 give me common multiple values of 2 and 5 

for (var b =1; b<= 10; b++){

    if (b%2 == 0  &&  b%5 == 0) {       // so here we are pluging two condition at once 
                                        // we will get the result for both condition that matches
        console.log(b)                  // 10 is the correct answer for both condition
    }
}


// 2 or 5

// // from 1 to 10 give me common multiple values of 2 and 5 

 for (var e =1;  d <=10; e++){

if (e%2 || e%5 == 0 ) {

     console.log(e)
 }

 }

console.log("++++++++++")

////



// How to increment by 2  using  for loop ????




for (let i = 0; i<=10; i+=2) {     // Here  " i+=2 "  means we are incrementing by 2 each time

   
   
   
    console.log(i);


}



//



for( let a = 0; a<=5 ; a++){



    console.log('walking');       // in this loop we are just printing ' walking ' five times

}






// How to add numbers by using  for  loop  ????




let total = 0;                     // this line means initializing total num is 0 here

for( let b = 0;  b<=10; b++){


    console.log(b);                  // This line will print  1 to 10 in console

    total= +b;                     // This line will add all the number 0 throu 10 

}


 console.log("tolal number is : " + b);      // Thia line will print the total num in console
                                        // we willl receive total number 11, from 0-10 .  

  

 // Second loop
//######################################


  let totals= 0;

  for( num = 0; num<=10; num++){


    totals = totals + num;           // This line will add all the num from 0 t0 10 together,
                                    // it will be like, 0+1+2+3+4+5+6+7+8+9+10 = 55                                         
                                                                                    
                                                                                                                                             
  }
        
  console.log(" Final number is : " + totals);
                                        

console.log("###########################")




