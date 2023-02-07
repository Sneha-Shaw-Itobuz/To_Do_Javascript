const obj = [];
let taskInput = document.getElementById("taskInput");
let list = document.getElementById("list");
let clear = document.getElementById("clear");
let all = document.getElementById("All");
let incomplete = document.getElementById("incomplete");
let completed = document.getElementById("completed");
let filters = document.querySelectorAll(".filters button");

function add() {
  if (taskInput.value.length == 0) {
    alert("Enter Task!");
  } else {
    list.innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${taskInput.value}
                </span>
                <button class="complete">
                <i class="fas fa-solid fa-check"></i>
                </button>
                <button class="delete">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;
    filters[0].classList.add("active");

    taskInput.value = "";
    let taskDelete = document.querySelectorAll(".delete");
    for (let i = 0; i < taskDelete.length; i++) {
      taskDelete[i].onclick = function () {
        this.parentNode.remove();
      };
    }
    let taskComplete = document.querySelectorAll(".complete");
    for (let i = 0; i < taskComplete.length; i++) {
      taskComplete[i].onclick = function () {
        this.parentNode.style.textDecoration = "line-through";
      };
    }
  }
}

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    add();
  }
});

clear.onclick = function () {
  let taskComplete = document.querySelectorAll(".complete");
  for (let i = 0; i < taskComplete.length; i++) {
    if (taskComplete[i].parentNode.style.textDecoration) {
      taskComplete[i].parentNode.remove();
    }
  }
};

completed.onclick = function () {
  let taskComplete = document.querySelectorAll(".complete");
  for (let i = 0; i < taskComplete.length; i++) {
    if (!taskComplete[i].parentNode.style.textDecoration) {
      taskComplete[i].parentNode.style.display = "none";
    } else {
      taskComplete[i].parentNode.style.display = "flex";
    }
  }
  filters[2].classList.add("active");
  filters[1].classList.remove("active");
  filters[0].classList.remove("active");
};
incomplete.onclick = function () {
  let taskComplete = document.querySelectorAll(".complete");
  for (let i = 0; i < taskComplete.length; i++) {
    if (taskComplete[i].parentNode.style.textDecoration) {
      taskComplete[i].parentNode.style.display = "none";
    } else {
      taskComplete[i].parentNode.style.display = "flex";
    }
  }
  filters[1].classList.add("active");
  filters[0].classList.remove("active");
  filters[2].classList.remove("active");
};
all.onclick = function () {
  let taskComplete = document.querySelectorAll(".complete");
  for (let i = 0; i < taskComplete.length; i++) {
    taskComplete[i].parentNode.style.display = "flex";
  }
  filters[0].classList.add("active");
  filters[1].classList.remove("active");
  filters[2].classList.remove("active");
};
