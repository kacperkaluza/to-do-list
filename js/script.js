const cnt = document.querySelector(".container");

function addTask() {
    const tasktext= document.querySelector("#textInput").value;
    const el = document.createElement("div"); 
        el.classList.add("task");
        const p = document.createElement("p");
            p.innerText = tasktext;
        el.append(p);
        const btnDone = document.createElement("button");
            btnDone.innerHTML = '<img src="img/done.svg">';
        el.appendChild(btnDone);
        const btnDelete = document.createElement("button");
            btnDelete.innerHTML = '<img src="img/delete.svg">';
        el.appendChild(btnDelete);
        const btnEdit = document.createElement("button");
            btnEdit.innerHTML = '<img src="img/edit.svg">';
        el.appendChild(btnEdit);
    cnt.append(el);
};

function deleteTask() {
    console.log("deleteTask");
};