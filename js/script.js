window.addEventListener("load", function () {
    const todo_box = document.getElementById("todo_box");
    const user_input = document.getElementById("user_input");


    todo_box.addEventListener("click", function (event) {
        if (event.target.tagName === "I") {
            remove_task(event.target.parentElement.parentElement);
        } else if (event.target.tagName === "H1") {
            toggle_task(event.target);
        }
    });

    user_input.addEventListener("keypress", function (event) {
        if (event.key === "Enter" && user_input.value!=="") {
            add_task(user_input.value);
            user_input.value = "";
        }
    });

    function add_task(value) {
        let task=document.createElement("H1");
        task.innerText=value;
        task.classList.add("entry");
        task.classList.add("todo");
        let icon=document.createElement("SPAN");
        icon.classList.add("icon");
        let i=document.createElement("I");
        i.classList.add("fa")
        i.classList.add("fa-trash-o");
        icon.appendChild(i);
        task.appendChild(icon);
        todo_box.appendChild(task);
    }

    function remove_task(task) {
        task.remove();
    }

    function toggle_task(task) {
        task.classList.toggle("completed");
    }
});
