function coercion(){
    document.getElementById("coercion").innerHTML = (typeof 3);
    
}

// a big negative function
function bigNegative(){
     document.getElementById("bigNegative").innerHTML = -4E450;
}

// a big positive function
function bigPositive(){
    document.getElementById("bigPositive").innerHTML = 4E450;
}

// function utilizing the NAN method set to get true
function yes(){
    document.getElementById("yes").innerHTML = isNaN("Wande");
}

// function utilizing the NAN method set to get false
function no(){
    document.getElementById("no").innerHTML = isNaN("00003");
}

//boolean logic
function isBigger(){
    document.getElementsByTagName("div")[0].innerHTML = 6 > 5;
}

//showing the use of console.log
function consoleLogging(){
    var sum = 2+3;
    document.getElementsByClassName("log").innerHTML = console.log("2 + 3 is "+ sum);
}
//showing the use of console.log to display a boolean returning false
function isSmaller(){
    document.getElementsByTagName("div")[1].innerHTML = console.log(6 < 5);
}

function isEquals(){
    document.getElementsByTagName("div")[2].innerHTML = console.log(6 == 6);
}

function isNotEquals(){
    document.getElementsByTagName("div")[3].innerHTML = console.log(6 == 5);
}
// Return true by ensuring to match the data type and value.
function strictEquality1(){
    document.getElementById("sdt-sv").innerHTML = (6 === 6);
}

// Return false by writing a different data type and different value 
function strictEquality2(){
    document.getElementById("ddt-dv").innerHTML = ('7' === 6);
}

// Return false by writing a different data type but the same value for both.
function strictEquality3(){
    document.getElementById("ddt-sv").innerHTML = ('6' === 6);
}

// Return false by writing the same data type but a different value for both.
function strictEquality4(){
    document.getElementById("sdt-dv").innerHTML = (7 === 6);
}

//And Operator false
function andOperator1(){
    document.getElementById("andOperator1").innerHTML = (7<6 && 6>7);
}
// And Operator true
function andOperator2(){
    document.getElementById("andOperator2").innerHTML = (4<6 && 9>7);
}

function orOperator1(){
    document.getElementById("orOperator1").innerHTML = (7<6 || 6>7);
}
// And Operator true
function orOperator2(){
    document.getElementById("orOperator2").innerHTML = (4<6 || 3>7);
}
// NOT Operator false
function notOperator1(){
    document.getElementById("not1").innerHTML = !(4 < 6);
}

// NOT Operator true
function notOperator2(){
    document.getElementById("not2").innerHTML = !(6 < 6);
}