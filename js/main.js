class Todo{
    constructor(todo, ){
        this.todoItem = todo;
        this.done = false;
    }
}

let todoList = [];

//Hämta id
let todoInput = document.getElementById("todoInput");
let todoUl = document.getElementById("todoUl");
let addBtn = document.getElementById("addBtn");

window.onload = function(){
  click();
}

function click(){
  addBtn.addEventListener("click", addTodoBtn);
  generateHtml();
}

// lägger till värdet från input i todoList + gör så sidan ej laddas om
function addTodoBtn(event) {
  event.preventDefault();
  let todoItem = new Todo(todoInput.value);
  todoList.push(todoItem);
  console.log(todoList);
  generateHtml();
}

//Generar lista vid knapptryck
function generateHtml(){
  let ul = document.getElementById("todoUl");
  ul.innerHTML = "";
  //Loopa
  for (let i = 0; i < todoList.length; i++) {
      //Skapa li/span
      let todoLi = document.createElement("li");
      todoLi.classList.add("todoLi");
      let todoSpan = document.createElement("span");
      todoSpan.innerText = todoList[i].todoItem;
      todoSpan.classList.add("todoSpan");
      todoLi.appendChild(todoSpan);
  
      //Markera klar knapp
      let completeBtn = document.createElement("button");
      completeBtn.className = "completeBtn";
      completeBtn.innerHTML = '<i class="far fa-check-circle"></i>';
      completeBtn.id = "completeBtn";
      completeBtn.addEventListener("click", (event)=>{
        event.preventDefault();
        console.log("Klart knapp funkar");
        todoList[i].done = !todoList[i].done;
        generateHtml();
      });
      
      //Ta bort knapp
      let trashBtn = document.createElement("button");
      trashBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
      trashBtn.className = "trashBtn";
      trashBtn.addEventListener("click", (event)=>{
        event.preventDefault();
        todoList.splice(i, 1);
        generateHtml();
      });
      
      // //Append
      todoLi.appendChild(completeBtn);
      todoLi.appendChild(trashBtn);
      ul.appendChild(todoLi);

      //Lägger till text-decoration
      if (todoList[i].done === true) {
        todoSpan.classList.add("completeBtnStyle");
      }
    }
    
    //Rensar
    todoInput.value = "";
  }
  


