// function to validate via javascript
function validateForm(){
    //to check if the address field was left empty.
    let x = document.forms['contact']['address'].value;
    if (x ==""){
        alert("Home Address must be filled out");
        return false;
    }
}