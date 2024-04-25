//function that returns the sum of 10 and 40
function sumFunction(){
    var a =10, b= 40, c = a+b;
      document.getElementById("Button_Text").innerHTML = "The sum is "+c;
};

// function that uses the concatenate operator
function addText(){
    var sentence = "This Old Man, ";
    sentence += "He Played One...";
    document.getElementById("join").innerHTML= sentence;

};

function addtwo(a, b){
    console.log(a+b);
}
addtwo(4,-2);

