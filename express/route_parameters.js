const express = require('express');
const app = express();

// Sample data
const users = {
  1: { name: 'Alice', email: 'alice@example.com' },
  2: { name: 'Bob', email: 'bob@example.com' }
};

const posts = {
  101: { userId: 1, title: 'Alice\'s First Post' },
  102: { userId: 2, title: 'Bob\'s Travel Blog' }
};

// Route to get user by ID using route parameter
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = users[userId];
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});

// Route to get a specific post by a user using nested route parameters
app.get('/users/:userId/posts/:postId', (req, res) => {
  const { userId, postId } = req.params;
  const post = posts[postId];
  
  if (!post || post.userId.toString() !== userId) {
    return res.status(404).json({ error: 'Post not found for this user' });
  }
  
  res.json(post);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
