//An addition function
function addition_Function() {
    var Addition = 2 + 2;
    document.getElementById("add").innerHTML = "2 + 2 = "+ Addition;
}

//A subtraction function
function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("sub").innerHTML = "5 - 2 = "+ Subtraction;
}

// A multiplication function
function multiplication_Function() {
    var Multiplication = 6 * 8;
    document.getElementById("mult").innerHTML = "6 * 8 = " + Multiplication;
}

// A division function
function division_Function() {
    var Division = 45 / 5;
    document.getElementById("div").innerHTML = "45 / 5 = "+ Division;
}

//An increment function
function increment_Function(a){
    document.getElementById("inc").innerHTML =" This increments to "+a++;
}

// A decrement function
function decrement_Function(b){
    document.getElementById("dec").innerHTML =" This decrements to "+ b--;
}

//A modulus function
function modulus_Function(a,b){
    document.getElementById("mod").innerHTML= a + " mod "+ b +" equals "+ a%b;
}

// A function using the Random math method.
function random_Function(){
    document.getElementById("rand").innerHTML= Math.random()*100;
};