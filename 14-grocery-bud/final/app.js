const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const submitBtn = document.getElementById("submit-btn");
const list = document.getElementById("todo-list");

form.addEventListener("submit", addItem);

function addItem(e) {
  e.preventDefault();
  const value = todoInput.value.trim();
  if (value === "") return;
  createListItem(value);
  todoInput.value = "";
}

function createListItem(todoListText) {
  const listItem = document.createElement("div");
  listItem.setAttribute("id", "todo-item");

  const title = document.createElement("p");
  title.setAttribute("id", "title");
  title.textContent = todoListText;
  listItem.appendChild(title);

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("type", "button");
  deleteBtn.setAttribute("id", "delete-btn");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.addEventListener("click", deleteItem);

  listItem.appendChild(deleteBtn);

  list.appendChild(listItem);
}


function deleteItem(e) {
  const listItem = e.currentTarget.parentElement;
  list.removeChild(listItem);
}
