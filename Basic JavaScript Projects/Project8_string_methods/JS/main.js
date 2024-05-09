var sentence = "A stich in time saves nine.";  //A global variable
//Function showing off concatenation
function fullSentence(){
    var partOne ="The Quick Brown Fox ";
    var partTwo = "Jumps Over ";
    var partThree = "The Lazy Dog ";    
    document.getElementById("concatenate").innerHTML = partOne.concat(partTwo,partThree);
}

// function showing the slice method in action
function sliceMethod(){
    var section = sentence.slice(10,15);
    // use of the toUpperCase method to convert a string to uppercase
    section = section.toUpperCase();
    document.getElementById('slice').innerHTML = section;
    
}
// function using the search method
function search4Something(){
    document.getElementById('search').innerHTML ="The word time in "+sentence+" starts at position "+sentence.search('time')
}
//function using the toString() method
function stringMethod(){
    var X = 190;
    document.getElementById("numbersToString").innerHTML = X.toString();
}
// function using the precision method
function precisionMethod(){
    var W = 124556.987634523455112;
    document.getElementById('precision').innerHTML = W.toPrecision(10);
}

//function using the toFixed() method
function fixedMethod(){
    var C = 35899.1245
    document.getElementById('fixed').innerHTML = C.toFixed(3);
}
// function using the valueOf method
function valueOfMethod(){
    var D = "Super Man!"
    document.getElementById('value').innerHTML =D.valueOf();
}