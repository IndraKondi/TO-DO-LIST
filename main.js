const inputtask = document.getElementById('inputtask');
const todolist = document.getElementById('todolist');
const submitbtn = document.getElementById('submitbtn');

submitbtn.addEventListener('click', () => {
    const task = inputtask.value;
    if(task.value !== ""){
        const newtask = document.createElement("li");
        newtask.innerText = task;
        const deltaskbtn = document.createElement("button");
        deltaskbtn.innerText = "Remove";
        deltaskbtn.classList.add("delbtn");
        deltaskbtn.addEventListener('click', () =>{
            newtask.remove();
        });
        newtask.appendChild(deltaskbtn);
        todolist.appendChild(newtask);
        inputtask.value = "";
    }
});