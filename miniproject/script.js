const API = "http://localhost:5000/tasks";

// fetch and show tasks
async function loadTasks() {
  const res = await fetch(API);
  const tasks = await res.json();

  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${task.completed ? "✅" : "⬜"} ${task.title}
      <button onclick="completeTask(${task.id})">Done</button>
      <button onclick="deleteTask(${task.id})">❌</button>
    `;
    list.appendChild(li);
  });
}

// add task
async function addTask() {
  const input = document.getElementById("taskInput");

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: input.value })
  });

  input.value = "";
  loadTasks();
}

// complete task
async function completeTask(id) {
  await fetch(`${API}/${id}`, { method: "PUT" });
  loadTasks();
}

// delete task
async function deleteTask(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  loadTasks();
}

// initial load
loadTasks();
