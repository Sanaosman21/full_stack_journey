const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let tasks = ["sana","lunch","breakfast"]; // temporary database

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Get all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Add a task
app.post("/tasks", (req, res) => {
  const task = {
    id: Date.now(),
    title: req.body.title,
    completed: false
  };
  tasks.push(task);
  res.json(task);
});

// Mark task as completed
app.put("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: true } : task
  );
  res.json({ message: "Task updated" });
});

// Delete a task
app.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  tasks = tasks.filter(task => task.id !== id);
  res.json({ message: "Task deleted" });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
