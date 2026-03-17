let tasks = [];

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

/* Load saved tasks */

window.onload = function(){

let savedTasks = localStorage.getItem("tasks");

if(savedTasks){
tasks = JSON.parse(savedTasks);
displayTasks();
}

};


/* Add Task */

addBtn.addEventListener("click", function(){

let taskText = taskInput.value;

if(taskText === ""){
return;
}

let task = {
text: taskText,
completed:false
};

tasks.push(task);

saveTasks();
displayTasks();

taskInput.value="";

});


/* Display Tasks */

function displayTasks(){

taskList.innerHTML="";

tasks.forEach(function(task,index){

let li = document.createElement("li");

if(task.completed){
li.classList.add("completed");
}

li.textContent = task.text;


/* Complete task */

li.addEventListener("click",function(){

tasks[index].completed = !tasks[index].completed;

saveTasks();
displayTasks();

});


/* Delete button */

let deleteBtn = document.createElement("button");

deleteBtn.textContent="Delete";

deleteBtn.addEventListener("click",function(event){

event.stopPropagation();

tasks.splice(index,1);

saveTasks();
displayTasks();

});

li.appendChild(deleteBtn);

taskList.appendChild(li);

});

}


/* Save to Local Storage */

function saveTasks(){

localStorage.setItem("tasks", JSON.stringify(tasks));

}