window.addEventListener("load", function () {
    const todo_box = document.getElementById("todo_box");
    const user_input = document.getElementById("user_input");
    // localStorage.setItem("todo list", "") //clear session storage
    let db = localStorage.getItem("todo list");
    let tasks = {}
    if (db !== "") {
        tasks = JSON.parse(db);
    }

    function fetch_tasks() {
        for(let task in tasks){
            add_task(task);
            if(tasks[task]){
                todo_box.lastElementChild.classList.add("completed");
            }
        }
    }

    fetch_tasks();

    function search_task(task) {
        return tasks.hasOwnProperty(task);
    }

    todo_box.addEventListener("click", function (event) {
        if (event.target.tagName === "I") {
            remove_task(event.target.parentElement.parentElement);
        } else if (event.target.tagName === "H1") {
            toggle_task(event.target);
        }
    });

    user_input.addEventListener("keypress", function (event) {
        if(search_task(user_input.value))
            alert("Task already added");
        else{
            if (event.key === "Enter" && user_input.value !== "") {
                add_task(user_input.value);
                add_in_db(user_input.value);
                user_input.value = "";
            }
        }
    });

    function add_task(value) {
        let task = document.createElement("H1");
        task.innerText = value;
        task.classList.add("entry");
        task.classList.add("todo");
        let icon = document.createElement("SPAN");
        icon.classList.add("icon");
        let i = document.createElement("I");
        i.classList.add("fa")
        i.classList.add("fa-trash-o");
        icon.appendChild(i);
        task.appendChild(icon);
        todo_box.appendChild(task);
    }

    function add_in_db(value) {
        tasks[value]=false;
        localStorage.setItem("todo list", JSON.stringify(tasks));
    }

    function remove_task(task) {
        delete tasks[task.innerText]
        task.remove();
        localStorage.setItem("todo list", JSON.stringify(tasks));
    }

    function toggle_task(task) {
        task.classList.toggle("completed");
        let key=task.innerText;
        tasks[key] = !tasks[key];
        localStorage.setItem("todo list", JSON.stringify(tasks));
    }
});
