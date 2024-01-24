

// Method overLoading is not possible, method over riding is possible

// From below function 3rd function will run only
//data type will be decided during the run time in jabaScript 



function print(){

    console.log("hi")
}


function print(name){

    console.log("hi" + name)
}


function print(name, age){

    console.log("hi" + name + "age" + age )
}

print();



//

// run test cases on remote machine:
// tell me browserName, browserVersion, remoteExcution



function browserInfo(browserName, browserVersion, remoteExcution){

    if(typeof browserVersion === 'number' && typeof remoteExecution === 'boolean'){

        console.log(`'Browser:' ${browserName}, 
        'version:' ${browserVersion}, 
        'remoteExe:'${remoteExcution}`);

    }
    else if(typeof browserVersion === 'number'){

        console.log(`'Browser:' ${browserName}, 
        'version:' ${browserVersion}`)

    }
    else{

        console.log(`Browser: ${browserName}`);
    }


}

browserInfo('chrome', 115, true)
browserInfo('chrome', 115)
browserInfo('firefox')