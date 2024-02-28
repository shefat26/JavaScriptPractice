


function checkNumber(num){

    if(num > 0){

        console.log("Number is positive")
    }
    else if(num < 0){

        console.log("Number is is negative")
    }
    else{

        console.log("Zero number found")

    }

}

checkNumber(10);
checkNumber(-9);
checkNumber(0);



// Nested ifElse 


 function checkGrade(score){

    let grade ;

    if(score >= 90){

        grade = "A"

    }
    else{

        if(score >= 80){

            grade = "B"
        }
        else{

            if(score>=70){

                grade = "c"
            }
            else{

                grade = "D"

            }
        }
    }

    console.log(grade);

 }

checkGrade(90)
checkGrade(50)
checkGrade(75)



//////


// Launch browser condition

function browsers(a){

    //let browser = "chrome";

    if(a === "chrome"){

        console.log("launch chrome")

    }

    else if(a === "edge"){

        console.log("launch edge")

    }

    else if(a === "firefox"){

        console.log("launch firefox")

    }
    else {

        console.log("plz pass the right browser")

    }
    
}

browsers("chrome")





// Switch Case condition



function checkWeekDays(dayNumber){

    let day ;

    switch (dayNumber) {
        case 0:
            
         day = "sunday" ;
            break;
    
        case 1:
            
         day = "Monday" ;
            break;
    
        case 2:
            
         day = "Tuesday" ;
            break;
    
        case 3:
            
         day = "Wednessday" ;
            break;
    
        case 4:
            
         day = "Thursday" ;
            break;
    
        case 5:
            
         day = "Friday" ;
            break;
    
        case 6:
            
         day = "Saturday" ;
            break;
    
        default:

          console.log("Invalid Day");

            break;
    }

    return day;

}


console.log(checkWeekDays(2));





