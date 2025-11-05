const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()); // Allow frontend calls from other origins

// --- Database connection ---
mongoose.connect(
  "mongodb://localhost:27017/notesapp", // If using MongoDB Atlas, replace with your cloud URI
  { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB connection error:", err));

// --- Note Schema and Model ---
const noteSchema = new mongoose.Schema({
  text: { type: String, required: true }
});
const Note = mongoose.model("Note", noteSchema);

// --- API Endpoints ---

// Get all notes
app.get("/notes", async (req, res) => {
  try {
    const allNotes = await Note.find();
    res.json(allNotes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch notes" });
  }
});

// Add a new note
app.post("/notes", async (req, res) => {
  try {
    const newNote = new Note({ text: req.body.text });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ error: "Failed to add note" });
  }
});

// Delete a note by id
app.delete("/notes/:id", async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (deletedNote) {
      res.json({ success: true });
    } else {
      res.status(404).json({ error: "Note not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete note" });
  }
});

// --- Start the server ---
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
