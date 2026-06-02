const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    console.log("Button clicked")
    if(inputBox.value === ''){
        alert("You must write something");
        return;
    }

let taskRow = document.createElement("div");
taskRow.className = "task-row";

taskRow.innerHTMl = `
<input type="checkbox">
<p class="task-name">${inputBox.value}</p>
<button class="button personal">Personal</button>

<div class="task-date">
<i class="fa-reguklar fa-calendar"></i>
<span>June 10, 2026<?span>
</div>

<button class="btn medium">Medium</button>
<i class="fa-solid fa-ellipsis"></i>
`;

listContainer.appendChild(taskRow);
inputBox.value = "";
saveData();
}

console.log(listContainer);
listContainer.appendChild(newTask)

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "INPUT" && e.target.type === "checkbox"){
        e.target.parentElement.classList.toggle("completed");
        saveData();
    }
    else if (e.target.tagName === "I" && e.target.classList.contains("fa-ellipsis")){
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("tasks", listContainer.innerHTMl);
}

