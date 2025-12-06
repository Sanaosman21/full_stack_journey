//using query and route parameters
const express = require('express');
const app = express();

const students = [
  { id: 1, name: 'Alice', year: 3, branch: 'CSE' },
  { id: 2, name: 'Bob', year: 2, branch: 'ECE' },
  { id: 3, name: 'Charlie', year: 3, branch: 'CSE' },
  { id: 4, name: 'David', year: 1, branch: 'MECH' }
];
app.get('/students/:id', (req, res) => {
  const { id } = req.params;          // route param (from URL path)
  const student = students.find(s => s.id === Number(id));

  if (!student) {
    return res.status(404).json({ error: 'Student not found' });
  }

  res.json(student);
});
app.get('/students', (req, res) => {
  const { year, branch } = req.query;   // query params (after ?)
  let result = students;

  if (year) {
    result = result.filter(s => s.year === Number(year));
  }

  if (branch) {
    result = result.filter(s => s.branch === branch);
  }

  res.json(result);
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


