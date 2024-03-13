
function createListItem(todoListText) {
  const listItem = document.createElement("div");
  listItem.setAttribute("id", "todo-item");

  const title = document.createElement("p");
  title.setAttribute("id", "title");
  title.textContent = todoListText;
  listItem.appendChild(title);

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("type", "button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.addEventListener("click", deleteItem);

  listItem.appendChild(deleteBtn);

  const list = document.getElementById("todo-list");
  list.appendChild(listItem);
}


function deleteItem(e) {
  const listItem = e.currentTarget.parentElement;

  const list = document.getElementById("todo-list");
  list.removeChild(listItem);
}


////////////// DO NOT EDIT ANY CODE BELOW THIS LINE //////////////

// variable referencing the todo-input element
const todoInput = document.getElementById("todo-input");

// variable referencing the form
const form = document.getElementById("todo-form");

// attaching the addItem function to the form when it's submitted
form.addEventListener("submit", addItem);

// adding the todo text to the page after submit
function addItem(e) {
    e.preventDefault();
    const value = todoInput.value.trim();
    if (value === "") return;
    createListItem(value);
    todoInput.value = "";
  }