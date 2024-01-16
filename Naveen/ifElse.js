


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

















