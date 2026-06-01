const inputBox = document.getElementById("input-box");
const taskRow = document.getElementById("taskrow");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
}
else{
    let p = document.createElement("p")
    p.innerHTML = inputBox.value;
    taskRow.appendChild(p);
let span = document.createElement("span");
span.innerHTML = "\u00d7";
p.appendChild(span);
}