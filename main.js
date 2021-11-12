let todoInput = document.getElementById("todo-input");
let todoBtn = document.getElementById("todo-btn");
let todoContainer = document.getElementById("todo-container");
let todoList = document.getElementById("todo-list");

//EventListerners
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteList);

//Functions
function addTodo(event){
    event.preventDefault();
    //div
    let firstDiv = document.createElement("div");
    firstDiv.classList.add("todo");  
    // li 
    let newLi = document.createElement("li");
    newLi.innerHTML = todoInput.value;
    newLi.classList.add("newlist-item");  
    firstDiv.appendChild(newLi);  
    //Button for complete
    let completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="far fa-check-circle"></i>';
    completeButton.classList.add("btn-complete");
    firstDiv.appendChild(completeButton);
    //Button close
    let closeButton = document.createElement("button");
    closeButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    closeButton.classList.add("btn-close");
    firstDiv.appendChild(closeButton);
    todoList.appendChild(firstDiv);
    //Clear input value
    todoInput.value = "";
}
//Delete todoitem
function deleteList(e){
    let item = e.target;
    if (item.classList[0] === "btn-close"){
        let todo = item.parentElement;
        todo.remove();
    }
    //Completing 
if(item.classList[0] === "btn-complete"){
    let todo = item.parentElement;
    todo.classList.toggle("completed");
}
}



    
