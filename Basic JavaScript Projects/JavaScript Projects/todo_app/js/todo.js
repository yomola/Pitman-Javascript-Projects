/* this function gets the task from input */
function get_todos() {
    /*This creates an array of task that are inputted */
    var todos = new Array();
    /*This pulls the task that was saved in the web browser memory */
    var todos_str = localStorage.getItem("todo");
    /* if the input is not null, then JSON.parse will communicate with the web browser to make the tak a Javascript Object */
    if (todos_str !== null) {
      todos = JSON.parse(todos_str);
    }
    return todos;
  }
  
  /*This function adds the inputted task to th get_todos function array */
  function add() {
    /* This takes the inputted task and creates a variable of it*/
    var task = document.getElementById("task").value;
    var todos = get_todos();
    /*This adds a new task at the end of the array*/
    todos.push(task);
    /*This converts the task input to a JSON string */
    localStorage.setItem("todo", JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();
    return false;
  }
  
  /* this function kees the tasks permanently displaced on the screen */
  function show() {
    /* this sets the task that was retrieved as as variable */
    var todos = get_todos();
    /* This sets up each task as an unordered list*/
    var html = "<ul>";
    /*This displays a task to the list in the order that it is inputted*/
    for (var i = 0; i < todos.length; i++) {
      /*This also displays the task as a list and creates the button with the 'x */
      html +=
        "<li>" +
        todos[i] +
        '<button class="remove" id ="' +
        i +
        '">x</button></li>';
    }
    html += "</ul>";
    /* This displays the task as a list */
    document.getElementById("todos").innerHTML = html;
    /* This tells the brower how to display the todo array after an item has been removed */
    var buttons = document.getElementsByClassName('remove');
    for (var index = 0; index < buttons.length; index++) {
        buttons[index].addEventListener('click',remove);  
    };
  }
  /*This displays the inputed task when the 'Add Item' button is clicked */
  document.getElementById("add").addEventListener("click", add);
  /*this will keep the inputs displayed permanently on the screen*/
  show();
  
  function remove(){
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id,1);
    localStorage.setItem('todo',JSON.stringify(todos));
    /** This looks in the show() how to display a a removeditem on the screen */
    show();
    return false;
  }
  