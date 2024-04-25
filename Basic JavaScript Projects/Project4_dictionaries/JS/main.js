function myProfile(){
    var biodata = {
        firstname:"Adeyomola",
        lastname: "Adebayo",
        age: 36,
        gender: "Male",
        married: true,
        parent: true
    }
    //delete statement removes the married: true key value pair
    delete biodata.married;
    document.getElementById('Dictionary').innerHTML = "Married? : "+ biodata.married;
}