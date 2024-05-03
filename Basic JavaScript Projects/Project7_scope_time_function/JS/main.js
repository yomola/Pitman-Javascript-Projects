var X = 10 //global variable
function scope1 (){
    document.write(+X+20+'<br>');
    var Y = 40;// a local variable of scope1()
}

function scope2 (){
    document.write(Y+'<br>'); // trying to call on a varible out of its scope.
    console.log(Y);
}

//Method Assgignment
function method_assignment(){
    var currentDate = new Date();
    if (currentDate.getHours() < 23){
        document.getElementById("dateMethod").innerHTML = "Good tidings! "+currentDate.getHours()
    }
}

//Else statement Assignment
function areYouOldEnough(){
    var age = document.getElementById('age').value;
    var verdict;
    if (age > 18){
        verdict = "You are an adult!";
    }
    else{
        verdict = "You are still a child";
    }
    document.getElementById('verdict').innerHTML = verdict;
}

// else if statement
function Time_function(){
    var Time = new Date().getHours();
    var Reply;
    if(Time < 12 && Time > 0){
        Reply = "It is morning time!";
    }
    else if (Time >= 12 && Time < 18 ){
        Reply ="It is afternoon!"
    }
    else{
        Reply = "It is evening time!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}