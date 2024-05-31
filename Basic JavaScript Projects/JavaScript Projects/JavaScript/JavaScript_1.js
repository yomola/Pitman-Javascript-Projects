// function that contains the use of the switch statement.
function Color_Function(){
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors){
        case "Red":
            Color_Output = "Red"+ Color_String;
        break;
        case "Yellow":
            Color_Output = "Yellow"+ Color_String;
        break;
        case "Green":
            Color_Output = "Green"+ Color_String;
        break;
        case "Blue":
            Color_Output = "Blue"+ Color_String;
        break;
        case "Pink":
            Color_Output = "Pink"+ Color_String;
        break;
        case "Purple":
            Color_Output = "Purple"+ Color_String;
        break;
        default:
        Color_Output = "Plese enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}
// function that contains the use of getElementsByClass method
function helloWorld(){
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "This text has changed!";
}
//function that draws a line
function drawLine(){
    var c = document.getElementById("myFirstCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(0,0);
    ctx.lineTo(300,100);
    ctx.stroke()
}
//function that draws a color gradient
function drawColorGradient(){
    const canvas = document.getElementById("mySecondCanvas");
    const ctx = canvas.getContext("2d");

    //Create a Gradient
    const grad = ctx.createLinearGradient(0,0,170,0);
    grad.addColorStop(0,"black")
    grad.addColorStop(0.5,"green");
    grad.addColorStop(1,"yellow");

    //Draw a filled Rectangle
    ctx.fillStyle = grad;
    ctx.fillRect(20,20,130,200);
}