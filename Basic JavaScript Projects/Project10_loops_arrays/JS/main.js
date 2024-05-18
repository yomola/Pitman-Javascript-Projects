// function that employs the While loop
function Call_Loop(){
    var digit = "";
    var x = 1;
    while (x<=10) {
        digit += '<br>' + x;
        x++;
    }
    document.getElementById('Loop').innerHTML = digit;
}

var Instruments =['Guitar','Drums','Piano','Bass','Violin','Trumpet','Flute'];
var Content =""
var y;
// function that employs the for loop
function for_Loop(){
    for (y = 0; y < Instruments.length; y++) {
        Content += Instruments[y] + '<br>';
    }
    document.getElementById('listOfInstruments').innerHTML = Content;
}

//function with an array called Cat_Picture
function cat_pics(){
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById('Cat').innerHTML = "In this picture, the cat is "+Cat_Picture[2]+".";
}

//function with an array called dogAction
function array_Function(){
    var dogAction = [];
    dogAction[0] = "sleeping";
    dogAction[1] = "playing";
    dogAction[2] = "eating";
    dogAction[3] = "barking";
    document.getElementById('Array').innerHTML = "Here, the Dog is "+dogAction[3]+".";
}

// function that shows the use of the const keyword
function constant_function(){
    const Human = {
                    gender: 'male',
                    race: 'african',
                    height: '6 feet' 
                };
    Human.skincolor ="brown";
    Human.gender = "female";
    document.getElementById('Constant').innerHTML = "This Human is a "+Human.skincolor+", "+Human.gender+", he is "+Human.race+", and he is "+Human.height+ " tall.";
}

//function using the let keyword
function showOfLet(){
    let y = "Hello World";
    document.getElementById('letKeyword').innerHTML = y;
}
// function using an object
function Car_Object(){
    let car = {
        make: "Dogde ",
        model: "Viper ",
        year: "2021 ",
        color: "black ",
        description: function() {
            return "The car is a "+ this.year+this.color+this.make+this.model;
        }
    };
    document.getElementById('Car').innerHTML = car.description();
}