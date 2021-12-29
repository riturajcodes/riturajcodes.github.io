const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const create = document.getElementById("create");
const lists = document.getElementById("lists");

create.addEventListener("click", () => {
  if (taskDescription.value && taskTitle.value) {
    const todo = `<div class="todo">
          <div class="title">${taskTitle.value}</div>
          <div class="description">${taskDescription.value}</div>
          <button class="complete-btn" onClick="checked(this)"><i class="bx bx-check"></i></button>
          <button class="trash-btn" onClick="fall(this)"><i class="bx bx-trash"></i></button>
        </div>`;
    lists.innerHTML += todo;
    taskTitle.value = "";
    taskDescription.value = "";
  } else {
    alert("You cannot submit blank fields");
  }
});

const checked = (ele) => {
  ele.parentElement.classList.toggle("checked");
};

const fall = (ele) => {
  ele.parentElement.classList.add("fall");
  setTimeout(() => {
    ele.parentElement.remove();
  }, 500);
};
